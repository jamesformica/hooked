export const bg = img => `url('${img}')`

export const bgStyle = img => ({
  backgroundImage: bg(img)
})

export default bgStyle
