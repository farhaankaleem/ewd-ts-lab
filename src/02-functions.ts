import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]) : string[] {
    const updatedAges: string[] = [];

    for (let i = 0; i < friends.length; i++) {
        friends[i].age += 1
        updatedAges.push(`${friends[i].name} is now ${friends[i].age}`)
    }

    return updatedAges;
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

// Add the colleague with the highest extension number plus 1.
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const colleagueHighest: Colleague = highestExtension(cs)
    let colleague: Colleague = {
        name : name,
        department : department,

        contact: {
            email : email,
            extension : colleagueHighest.contact.extension + 1
        }
    }
    colleagues.current.push(colleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));