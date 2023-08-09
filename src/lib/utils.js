//very simple url regex check
export function photoSrcCheck(url) {
    //const regex = /^http.*\.(jpg|jpeg|png|gif|webp)$/i;
    const regex = /^http/i;
    return regex.test(url);

}