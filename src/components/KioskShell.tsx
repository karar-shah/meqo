import NavigationArrows from "./NavigationArrows";

/**
 * Kiosk shell — renders the liquid-glass navigation arrows overlaid on the
 * page content. No client-side provider wrapping needed; NavigationArrows
 * is its own isolated client leaf.
 */
export default function KioskShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <NavigationArrows />
    </>
  );
}
