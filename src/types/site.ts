export type Locale = "ru" | "ua" | "en";

export type LocalizedText = Record<Locale, string>;

export interface NavigationItem {
  label: LocalizedText;
  href: string;
}

export interface ServiceCategory {
  title: LocalizedText;
  summary: LocalizedText;
  placeholderItems: LocalizedText[];
}

export interface ProcedureItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface DoctorProfile {
  name: string;
  specialization: LocalizedText;
  bio: LocalizedText;
  branch: LocalizedText;
  photoPath?: string;
  photoPosition?: string;
  photoScale?: number;
}

export interface BranchLocation {
  district: LocalizedText;
  address: LocalizedText;
  phone: string;
}

export interface FooterLink {
  label: LocalizedText;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteCopy {
  topBar: string;
  chooseLanguage: string;
  brandName: string;
  clinicLabel: string;
  heroTitle: string;
  heroDescription: string;
  requestCall: string;
  watchPresentation: string;
  chooseDistrict: string;
  servicesMenu: string;
  popularTitle: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string;
  missionTitle: string;
  missionQuote: string;
  specialistsTitle: string;
  specialistsBody: string;
  equipmentTitle: string;
  equipmentBody: string;
  certificatePlaceholder: string;
  videoPlaceholder: string;
  doctorsPlaceholder: string;
  licenseLabel: string;
  hoursLabel: string;
  hoursValue: string;
  quickLinksLabel: string;
  branchesLabel: string;
  footerNote: string;
  navServicesPlaceholder: string;
  introVideoLabel: string;
  yearsPracticeLabel: string;
  branchCountLabel: string;
  licensedClinicLabel: string;
  serviceComingSoon: string;
  serviceSectionBody: string;
  popularSectionBody: string;
  teamEyebrow: string;
  teamNeedsTitle: string;
  licenseNotice: string;
  mapCardTitle: string;
  mapCardBody: string;
  openMapLabel: string;
  navigationLabel: string;
}