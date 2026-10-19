
export type ListingInput = {
  title: string;
  description: string;
  price: number;
  city: string;
  categorySlug: string;
};

export type ValidationResult =
  | { success: true; data: ListingInput }
  | { success: false; errors: string[] };

export function validateListing(
  input: ListingInput
): ValidationResult {
  const errors: string[] = [];

  const title = input.title.trim();
  const description = input.description.trim();
  const city = input.city.trim();
  const categorySlug = input.categorySlug.trim().toLowerCase();
  const price = Number(input.price);

  if (title.length < 3 || title.length > 100) {
    errors.push("Title must be between 3 and 100 characters.");
  }

  if (description.length < 10 || description.length > 5000) {
    errors.push(
      "Description must be between 10 and 5000 characters."
    );
  }

  if (!Number.isFinite(price) || price <= 0) {
    errors.push("Price must be a valid number greater than zero.");
  }

  if (city.length < 2 || city.length > 80) {
    errors.push("Please enter a valid city.");
  }

  if (!/^[a-z0-9-]+$/.test(categorySlug)) {
    errors.push("Please select a valid category.");
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      title,
      description,
      price,
      city,
      categorySlug,
    },
  };
}
