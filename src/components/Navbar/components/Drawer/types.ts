export interface NavbarDrawerProps {
  active: string;
  drawerOpen: boolean;
  onActive: (sectionActive: string) => void;
  onDrawerOpen: (open: boolean) => void;
}
