import {LifeHero} from './LifeScreenUI.jsx';
import React from 'react';
import {formatMoney} from './money.js';
import {donateCharity,donationUnavailable} from './charity.js';
export default function CharityScreen({game,setGame}){
 const reason=donationUnavailable(game);
 return <div className="development-screen charity-screen life-screen"><LifeHero icon="💛" title="Give back to your community" description="A little generosity can change someone’s future." badge="Donate to Charity"/><div className="life-metrics"><div><small>Donation</small><b>{formatMoney(1000)}</b></div><div><small>Available funds</small><b>{formatMoney(game.money+(game.bankBalance||0))}</b></div><div><small>Lifetime donations</small><b>{formatMoney(game.lifetimeDonations||0)}</b></div></div><section><h3>Your gift makes a difference</h3><p>Your donation supports local education and essential services.</p>{reason&&<p>{reason}</p>}<button className="charity-donate" disabled={Boolean(reason)} onClick={()=>setGame(g=>donateCharity(g))}>Donate {formatMoney(1000)}</button></section></div>;
}
