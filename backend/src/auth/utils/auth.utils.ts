export const getJwtSecret = () => {
  return process.env.JWT_SECRET || '00000000000000000000000000000000'
}