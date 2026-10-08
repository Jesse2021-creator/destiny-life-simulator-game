import {spend,funds} from './futurePlanning.js';
export function donationUnavailable(game){return !game.alive?'This life has ended.':game.age<18?'Available at age 18.':funds(game)<1000?'You need $1,000 in available funds to donate.':'';}
export function donateCharity(game){
 if(donationUnavailable(game))return game;
 const paid=spend(game,1000,'Charitable donation');
 return {...paid,lifetimeDonations:(game.lifetimeDonations||0)+1000,stats:{...game.stats,happiness:Math.min(100,(game.stats?.happiness||0)+2)},log:[{year:game.year,age:game.age,text:'You donated $1,000 to a community charity, supporting local education and essential services.',tag:'Giving back',icon:'💛'},...(game.log||[])]};
}
