export const internationalService = /^00(?:1(?:[045689]|[37]\d)|9\d\d)$/;
export const incomingOnlyInternational = /^10(?:(?:3[1-3]|68)|10[034])$/;
export const community = /^11(?:0(?:0|[1-9]\d{2})|9\d)$/;
export const interconnectionAndRouting = /^14[1-9]\d$/;
export const dataNetworkAccess = /^019(?:2\d|8[4-8])$/;
export const operatorService = /^12(?:4(?:5\d|88)|55\d|68[689])$/;
export const paging = /^0160[1-9]\d$/;
export const virtualPrivateNetwork = /^188\d{2}$/;
export const callingCard = /^189\d{2}$/;

const categories = {
    internationalService,
    incomingOnlyInternational,
    community,
    interconnectionAndRouting,
    dataNetworkAccess,
    operatorService,
    paging,
    virtualPrivateNetwork,
    callingCard
};

export default categories;