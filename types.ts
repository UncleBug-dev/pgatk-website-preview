import { LucideIcon } from 'lucide-react';

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  summary: string;
  content?: string; 
  isMain?: boolean;
}

export interface QuickLinkItem {
  label: string;
  icon: LucideIcon;
  description?: string;
  color: string;
  href?: string;
}