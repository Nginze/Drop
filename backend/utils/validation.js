import bcrypt from 'bcrypt'
export const verifyPassword = async (hash, plainPassword) => {
    const result = await bcrypt.compare(plainPassword, hash)
    console.log('this is result for password compare', result)
    return result
};
