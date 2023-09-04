function uuid(): string {
  return "xxxx".replace(/x/g, () => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0
    return r.toString(16)
  })
}

export default uuid
