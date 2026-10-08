window.GAME_DATA={
 heroes:[
  {id:'warrior',name:'Warrior',hp:7,position:'front',basic:{name:'Strike',type:'damage',amount:2,range:'melee'},passive:'Gain Rage on kills.'},
  {id:'cleric',name:'Cleric',hp:6,position:'front',basic:{name:'Mend',type:'heal',amount:1,range:'ally'},passive:'Healing another unit also heals Cleric 1.'},
  {id:'archer',name:'Archer',hp:5,position:'back',basic:{name:'Shoot',type:'damage',amount:1,range:'ranged'},passive:'50% crit chance (+1 damage).'}
 ],
 cards:[
  {id:'ARC-01',hero:'archer',name:'Multi Shot',timing:'Action',text:'Deal 2 damage to 2 enemies. Crit: deal 2 damage to 3 instead.',effect:'multi',amount:2},
  {id:'ARC-02',hero:'archer',name:'Take Aim',timing:'Quick',text:'Quick: Archer next attack is guaranteed to crit. Draw 1.',effect:'aim'},
  {id:'ARC-03',hero:'archer',name:'Focused Shot',timing:'Action',text:'Deal 2 damage. Crit: +2 damage.',effect:'focused',amount:2},
  {id:'ARC-04',hero:'archer',name:'Piercing Arrow',timing:'Action',text:'Deal 1 ignoring Block. Crit: apply Bleed.',effect:'pierce',amount:1},
  {id:'WAR-01',hero:'warrior',name:'Charge',timing:'Action',text:'Deal 2 melee damage. May attack across lanes.',effect:'damage',amount:2,range:'ranged'},
  {id:'WAR-02',hero:'warrior',name:'Counter Strike',timing:'Reaction',text:'React: when attacked, reduce damage by 1 and deal 2 back.',effect:'reactionCounter'},
  {id:'WAR-03',hero:'warrior',name:'Devastating Blow',timing:'Action',text:'Deal 3 melee damage. Killing blow gains extra Rage.',effect:'damage',amount:3,range:'melee'},
  {id:'WAR-04',hero:'warrior',name:'Second Wind',timing:'Quick',text:'Quick: heal Warrior 1.',effect:'selfHeal',amount:1},
  {id:'CLE-01',hero:'cleric',name:'Heal',timing:'Action',text:'Heal any allied unit for 2.',effect:'heal',amount:2},
  {id:'CLE-02',hero:'cleric',name:'Holy Strike',timing:'Action',text:'Deal 2 melee damage.',effect:'damage',amount:2,range:'melee'},
  {id:'CLE-03',hero:'cleric',name:'Inspiring Word',timing:'Action',text:'Ready another unit. Draw 1.',effect:'ready'},
  {id:'CLE-04',hero:'cleric',name:'Quick Heal',timing:'Quick',text:'Quick: heal any unit for 1.',effect:'quickHeal',amount:1}
 ],
 enemies:[
  {id:'goblinSpearman',name:'Goblin Spearman',hp:3,attack:1,range:'melee',position:'front',text:'Basic melee attacker.'},
  {id:'orcWarrior',name:'Orc Warrior',hp:5,attack:2,range:'melee',position:'front',text:'Durable bruiser.'},
  {id:'goblinArcher',name:'Goblin Archer',hp:2,attack:1,range:'ranged',position:'back',text:'Prioritizes Backline.'}
 ]
};
