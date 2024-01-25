import {Friend, Colleague, EmailContact, Contact } from './myTypes'
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
function highestExtension(cs: Colleague[]) {
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

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

  function findFriends(
    friends: Friend[],
    sorter: (friend: Friend) => boolean
  ): Contact[] {
    const sorted = friends.filter(sorter); 
    const result: Contact[] = sorted.map((friend) => ({ name: friend.name }));
    return result 
  }

  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));
  