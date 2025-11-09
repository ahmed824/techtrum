/**
 * Merge and conditionally apply class names.
 *
 * مثال:
 * classNames("btn", isActive && "btn-active", isDisabled && "opacity-50")
 * => "btn btn-active"
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
