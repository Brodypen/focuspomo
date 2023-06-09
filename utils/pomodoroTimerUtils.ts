export function duration(seconds: number) {
  return [format(seconds / 60), format(seconds % 60)].join(":")
}

function format(n: number) {
  return (~~n).toString().padStart(2, "0")
}
