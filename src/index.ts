export const internationalService = /^00(?:1(?:[045689]|[37]\d)|9\d\d)$/;
export const incomingOnlyInternational = /^10(?:3[1-3]|68)$/;
export const community = /^11(?:00|9\d)$/;
export const interconnectionAndRouting = /^14[1-9]\d$/;

const categories = {
    internationalService,
    incomingOnlyInternational,
    community,
    interconnectionAndRouting
};

export default categories;