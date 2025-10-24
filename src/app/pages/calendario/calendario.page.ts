import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

type DayColor = 'green' | 'red' | 'none';

interface DayEvent {
  date: string; // 'YYYY-MM-DD'
  title: string;
  color: DayColor;
}

interface DayCell {
  iso: string;
  dayNumber: number;
  inMonth: boolean;
  event?: DayEvent | null;
}

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonIcon,
  ],
})
export class CalendarioPage implements OnInit {
  current = new Date();
  currentYear = this.current.getFullYear();
  currentMonth = this.current.getMonth(); // 0-11
  weeks: DayCell[][] = [];

  private storageKey = 'calendario_docente_events_v1';

  constructor(private router: Router) {
    // construtor padrão: apenas injeta Router
  }

  ngOnInit() {
    this.buildCalendar(this.currentYear, this.currentMonth);
  }

  goToMenu() {
    this.router.navigateByUrl('/menu');
  }

  // build calendar grid and read events from localStorage
  buildCalendar(year: number, month: number) {
    const firstOfMonth = new Date(year, month, 1);
    const startDay = firstOfMonth.getDay(); // 0 Sun - 6 Sat
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: DayCell[] = [];

    for (let i = 0; i < startDay; i++) {
      cells.push({ iso: '', dayNumber: 0, inMonth: false });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dt = new Date(year, month, d);
      const iso = dt.toISOString().slice(0, 10);
      const event = this.getEvent(iso);
      cells.push({ iso, dayNumber: d, inMonth: true, event });
    }

    while (cells.length % 7 !== 0) {
      cells.push({ iso: '', dayNumber: 0, inMonth: false });
    }

    this.weeks = [];
    for (let i = 0; i < cells.length; i += 7) {
      this.weeks.push(cells.slice(i, i + 7));
    }
  }

  // read all events
  private readAll(): DayEvent[] {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as DayEvent[];
    } catch {
      return [];
    }
  }

  private getEvent(dateIso: string): DayEvent | null {
    const ev = this.readAll().find((e) => e.date === dateIso);
    return ev ?? null;
  }

  // navigation controls
  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.buildCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.buildCalendar(this.currentYear, this.currentMonth);
  }

  // refresh events (call after docente modifies, or add polling/websocket)
  refresh() {
    // simple feedback: rebuild calendar and (optionally) flash something
    this.buildCalendar(this.currentYear, this.currentMonth);
  }

  getMonthNameShort(monthIndex: number) {
    return ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'][monthIndex];
  }
}