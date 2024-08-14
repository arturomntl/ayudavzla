// lib/typesTimeline.ts
export interface TimelineItem {
  color: string;
  content: string;
}

export interface TranslationsTimeline {
  NAV_BAR: string;
  TIMELINE: TimelineItem[];
  BUTTON: string;
}

export interface TranslationsMapTimeline {
  en: TranslationsTimeline;
  es: TranslationsTimeline;
}
