const linkSocialNetwork = [
    {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        dribbble: "https://dribbble.com/",
        google: "https://mail.google.com/"
    }
]
const description = "Lorem Ipsum is not simply is an action designer random text It has roots in a piece."

const teamDescription = [
    {
        fullName: "MIA WALSH",
        position: "UX Designer",
        description,
        linkSocialNetwork
    },
    {
        fullName: "AL RAYHAN",
        position: "UI Designer",
        description,
        linkSocialNetwork
    },
    {
        fullName: "DEN MARTIN",
        position: "Developer",
        description,
        linkSocialNetwork
    },
    {
        fullName: "JACK BROWN",
        position: "Developer",
        description,
        linkSocialNetwork
    },
    {
        fullName: "LUCY RAYN",
        position: "Recruiter",
        description,
        linkSocialNetwork
    },
    {
        fullName: "MIA WALSH",
        position: "UX Designer",
        description,
        linkSocialNetwork
    }
]

const listTeam = document.querySelector(".team__list");
const itemTeam = listTeam.querySelectorAll(".team__item");
const taskTemplate = document.getElementById("team-template").content;
const describePerson = taskTemplate.querySelector(".team-describe");
const fullNamePerson = describePerson.querySelector(".team-describe__title");
const personPosition = document.createElement("span");

for(let i = 0; i < itemTeam.length; i++){
    fullNamePerson.textContent = teamDescription[i].fullName;
    fullNamePerson.appendChild(personPosition);
    personPosition.textContent = `/ ${teamDescription[i].position}`;
    const person = describePerson.cloneNode(true);
    itemTeam[i].appendChild(person);
}