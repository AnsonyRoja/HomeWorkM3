const antiTrollsSecurity = (string) => {
    const result = string.replace(/[aeiouAEIOU]/g, '');
    return result;
};

module.exports = antiTrollsSecurity;

