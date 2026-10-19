
export const ADMIN_ONLY_CATEGORIES = [
  "showpiece",
  "spare-parts",
] as const;

export type ListingAccessInput = {
  categorySlug: string;
  userRole?: string | null;
};

export function canCreateListing({
  categorySlug,
  userRole,
}: ListingAccessInput): boolean {
  const slug = categorySlug.trim().toLowerCase();

  if (
    ADMIN_ONLY_CATEGORIES.includes(
      slug as (typeof ADMIN_ONLY_CATEGORIES)[number]
    )
  ) {
    return userRole === "ADMIN";
  }

  return userRole === "ADMIN" || userRole === "SELLER";
}

export function canShowListingPublicly(status: string): boolean {
  return status === "READY_TO_SELL";
}
