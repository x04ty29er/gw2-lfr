function Raid(id, leader) {
    this.id = 0;
    this.leader = leader;
};

Raid.prototype.getMissingRoles = function() {
    return {};
};

module.exports = Raid;