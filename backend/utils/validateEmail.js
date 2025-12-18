const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

const validateEmail = (email) => emailRegex.test(email)

module.exports = validateEmail
