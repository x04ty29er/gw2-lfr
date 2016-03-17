function Player(accountId) {
    this.accountId = accountId;
    this.canLead = false;
    this.roles = {};
    this.bosses = {};
}

Player.prototype.addRole = function(newRole) {
    var checkRole = this.roles[newRole];
    if (!checkRole) {
        this.roles[newRole] = true;
    }
};

Player.prototype.removeRole = function(role) {
    delete this.roles[role];
};

Player.prototype.addBoss = function(newBoss, exp)  {
    var checkBoss = this.bosses[newBoss];
    if (!checkBoss) {
        this.bosses[newBoss] = exp;
    }
};

Player.prototype.removeBoss = function(boss) {
    delete this.bosses[boss];
};

module.exports = Player;