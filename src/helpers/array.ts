export const joinArrayItems = <Item>(item: Item, index: number) =>
  index > 0 ? `, ${item}` : item
