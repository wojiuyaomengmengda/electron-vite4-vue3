import type { Recordable } from '@/types/global';
import type { LocaleType } from '@/types/locale';
export interface Language {
  el: Recordable
  name: string
}

export interface LocaleDropdownType {
  lang: LocaleType
  name?: string
  elLocale?: Language
}
