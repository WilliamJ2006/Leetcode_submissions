/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let hours = 0;
    let opponent = 0;
    while(opponent < energy.length) { 
        if(initialEnergy <= energy[opponent]){
            hours++;
            initialEnergy++;
        } else if(initialExperience <= experience[opponent]) {
            hours++;
            initialExperience++;
        } else {
            initialEnergy -= energy[opponent];
            initialExperience += experience[opponent]; 
            opponent++;
        }
    }
    return hours;
};
