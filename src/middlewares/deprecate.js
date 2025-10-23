
export const deprecate = ({sunset, link}) => (req, res, next) => {
    res.setHeader('Deprecation', 'true');
    if(sunset) res.setHeader('Sunset', sunset);
    if(link) res.setHeader('Link', link);
    next();
}
