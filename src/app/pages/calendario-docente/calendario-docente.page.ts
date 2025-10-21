import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonBackButton,
  IonTitle,
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
  selector: 'app-calendario-docente',
  templateUrl: './calendario-docente.page.html',
  styleUrls: ['./calendario-docente.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonBackButton,
    IonTitle,
  ],
})
export class CalendarioDocentePage implements OnInit {
  current = new Date();
  currentYear = this.current.getFullYear();
  currentMonth = this.current.getMonth(); // 0-11
  weeks: DayCell[][] = [];

  editingDateIso: string | null = null;
  editTitle = '';
  editColor: DayColor = 'none';
  panelOpen = false;

  private storageKey = 'calendario_docente_events_v1';

  constructor(private router: Router) {}

  ngOnInit() {
    this.buildCalendar(this.currentYear, this.currentMonth);
  }

  goToMenu() {
    this.router.navigateByUrl('/menu-docente');
  }

  buildCalendar(year: number, month: number) {
    const firstOfMonth = new Date(year, month, 1);
    const startDay = firstOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
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

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.buildCalendar(this.currentYear, this.currentMonth);
    this.closePanel();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.buildCalendar(this.currentYear, this.currentMonth);
    this.closePanel();
  }

  openEdit(day: DayCell) {
    if (!day.inMonth) return;
    this.editingDateIso = day.iso;
    const ev = this.getEvent(day.iso);
    if (ev) {
      this.editTitle = ev.title;
      this.editColor = ev.color;
    } else {
      this.editTitle = '';
      this.editColor = 'none';
    }
    this.panelOpen = true;
  }

  saveEdit() {
    if (!this.editingDateIso) return;
    if (!this.editTitle && this.editColor === 'none') {
      this.removeEvent(this.editingDateIso);
    } else {
      const ev: DayEvent = {
        date: this.editingDateIso,
        title: this.editTitle,
        color: this.editColor,
      };
      this.saveEvent(ev);
    }
    this.refreshAndClose();
  }

  removeEdit() {
    if (!this.editingDateIso) return;
    this.removeEvent(this.editingDateIso);
    this.refreshAndClose();
  }

  cancelEdit() {
    this.closePanel();
  }

  private refreshAndClose() {
    this.buildCalendar(this.currentYear, this.currentMonth);
    this.closePanel();
  }

  private closePanel() {
    this.panelOpen = false;
    this.editingDateIso = null;
    this.editTitle = '';
    this.editColor = 'none';
  }

  private readAll(): DayEvent[] {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as DayEvent[];
    } catch {
      return [];
    }
  }

  private writeAll(events: DayEvent[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(events));
  }

  getEvent(dateIso: string): DayEvent | null {
    const ev = this.readAll().find((e) => e.date === dateIso);
    return ev ?? null;
  }

  saveEvent(event: DayEvent) {
    const events = this.readAll();
    const idx = events.findIndex((e) => e.date === event.date);
    if (idx >= 0) events[idx] = event;
    else events.push(event);
    this.writeAll(events);
  }

  removeEvent(dateIso: string) {
    const events = this.readAll().filter((e) => e.date !== dateIso);
    this.writeAll(events);
  }

  getMonthNameShort(monthIndex: number) {
    return ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'][monthIndex];
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    this.closePanel();
  }
}