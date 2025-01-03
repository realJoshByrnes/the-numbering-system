export const internationalService = /^00(?:1(?:[045689]|[37]\d)|9\d\d)$/;
export const incomingOnlyInternational = /^10(?:3[1-3]|68)$/;
export const community = /^11(?:00|9\d)$/;
export const interconnectionAndRouting = /^14[1-9]\d$/;
export const dataNetworkAccess = /^019(?:2\d|8[4-8])$/

const categories = {
    internationalService,
    incomingOnlyInternational,
    community,
    interconnectionAndRouting,
    dataNetworkAccess
};

export default categories;