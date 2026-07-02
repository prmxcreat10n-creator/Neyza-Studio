import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  gradient: string;
  style?: React.CSSProperties;
}

export interface TrustedBrand {
  name: string;
  logoType: 'hubspot' | 'google' | 'meta' | 'slack' | 'notion';
}

export interface HighlightStat {
  value: string;
  label: string;
  iconType: 'users' | 'award' | 'chart';
}
