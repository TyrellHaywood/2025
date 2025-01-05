export interface TeamMember {
  fname: string;
  lname: string;
  nickname: string;
  university: string;
  program: string;
  year: string;
  image: string;
  university_image: string;
  pronouns: string;
  roles: string[];
  sub_role: string;
  linkedin: string;
  instagram: string;
  github: string;
  website: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    fname: "Timothy",
    lname: "Klint",
    nickname: "TJ",
    university: "John Abbott College",
    program: "Computer Science",
    year: "3rd Year",
    image: "/images/team/tj-klint.jpg",
    university_image: "",
    pronouns: "He/Him",
    roles: ["Co-Chair"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/timothy-klint/",
    instagram: "https://www.instagram.com/tj_klint/",
    github: "https://github.com/tjklint",
    website: "https://tjklint.github.io/",
    email: "timothyjklint@gmail.com",
  },
  {
    fname: "Kha",
    lname: "Pham",
    nickname: "Kha",
    university: "University of Manitoba",
    program: "Computer Science",
    year: "Graduated",
    image: "/images/team/kha-pham-fix.jpg",
    university_image: "",
    pronouns: "He/Him",
    roles: ["Co-Chair"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/khathepham/",
    instagram: "https://www.instagram.com/khathepham.photos/",
    github: "https://github.com/khathepham",
    website: "Khathepham.com",
    email: "contact@khathepham.com",
  },
  {
    fname: "Jaelyn",
    lname: "Wickramarachchi",
    nickname: "",
    university: "University Of Manitoba",
    program: "Economics with Computer Science",
    year: "4th Year",
    image: "/images/team/jaelyn-wick-fix.jpg",
    university_image: "",
    pronouns: "She/Her",
    roles: ["Director of Logistics"],
    sub_role: "",
    linkedin: "",
    instagram: "https://www.instagram.com/jae.wickk/",
    github: "",
    website: "",
    email: "",
  },
  {
    fname: "Michael",
    lname: "Xie",
    nickname: "",
    university: "University of Waterloo",
    program: "Computer Science",
    year: "3rd Year",
    image: "/images/team/michael-xie-fix.jpg",
    university_image: "",
    pronouns: "",
    roles: ["Logistics Team"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/michael-xie1/",
    instagram: "",
    github: "https://github.com/derzz",
    website: "https://www.michaelxie.ca/",
    email: "",
  },
  {
    fname: "Angeleeca",
    lname: "Jocson",
    nickname: "Angie",
    university: "University of Ottawa",
    program: "Computer Science & Mathematics",
    year: "4th Year",
    image: "/images/team/angie-jocson.png",
    university_image: "",
    pronouns: "She/Her",
    roles: ["Director of Sponsorship"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/angeleeca-jocson/",
    instagram: "https://www.instagram.com/altth3a/",
    github: "",
    website: "",
    email: "angeleeca.jocson@gmail.com",
  },
  {
    fname: "Arfah",
    lname: "Huda",
    nickname: "",
    university: "University of Windsor",
    program: "Computer Science & Mathematics",
    year: "4th Year",
    image: "/images/team/arfah-huda-fix.jpg",
    university_image: "",
    pronouns: "She/Her",
    roles: ["Sponsorship Team"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/arfahhuda/",
    instagram: "https://www.instagram.com/arfahhuda/",
    github: "",
    website: "",
    email: "",
  },
  {
    fname: "Tara",
    lname: "Denaud Joseph",
    nickname: "",
    university: "University of Ottawa ",
    program: "Honours BSc Computer Science",
    year: "3rd Year",
    image: "/images/team/tara-dj.jpg",
    university_image: "",
    pronouns: "She/Her",
    roles: ["Director of Speakers"],
    sub_role: "",
    linkedin: "www.linkedin.com/in/taradenaud",
    instagram: "https://www.instagram.com/taradenaud/",
    github: "https://github.com/taradenaud",
    website: "taradenaud.com",
    email: "taradenaud4@gmail.com",
  },
  {
    fname: "Janelle",
    lname: "Tam",
    nickname: "",
    university: "McGill University",
    program: "Software Engineering",
    year: "2nd Year",
    image: "/images/team/janelle-tam-fix.jpg",
    university_image: "",
    pronouns: "She/Her",
    roles: ["Speakers Team"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/janellewstam/",
    instagram: "https://www.instagram.com/_janelletam_",
    github: "https://github.com/janelletam",
    website: "",
    email: "janelletam.work@gmail.com",
  },
  {
    fname: "Tyrell",
    lname: "Haywood",
    nickname: "",
    university: "Carleton University",
    program: "Computer Science",
    year: "2nd Year",
    image: "/images/team/tyrell-haywood.JPG",
    university_image: "",
    pronouns: "He/Him",
    roles: ["Director of Technology"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/tyrell-haywood/",
    instagram: "https://www.instagram.com/tyrell.haywood/",
    github: "https://github.com/TyrellHaywood",
    website: "https://www.tyrellhaywood.me/",
    email: "tyrellchaywood@gmail.com",
  },
  {
    fname: "Taryn",
    lname: "Beaupre",
    nickname: "",
    university: "John Abbott College",
    program: "Computer Science",
    year: "3rd year",
    image: "/images/team/taryn-beaupre.jpg",
    university_image: "",
    pronouns: "She/Her",
    roles: ["Director of Promotions", "Tech UI/UX Design"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/taryn-beaupre/",
    instagram: "https://www.instagram.com/taryn.beaupre/",
    github: "https://github.com/TarynBeaupre",
    website: "https://tarynbeaupre.github.io/my-porfolio.io/",
    email: "beaupretaryn@gmail.com",
  },
  {
    fname: "Shrey",
    lname: "Bhatt",
    nickname: "",
    university: "Seneca Polytechnic",
    program: "Computer Programming & Analysis",
    year: "2nd Year",
    image: "/images/team/shrey-bhatt.jpg",
    university_image: "",
    pronouns: "",
    roles: ["Head Delegate"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/shreybhatt13",
    instagram: "https://www.instagram.com/shr.e_y/",
    github: "https://github.com/KaosElegent",
    website: "https://shreybhatt.co/",
    email: "shreybhatt13@gmail.com",
  },
  {
    fname: "Muhammad",
    lname: "Rafiuzzaman",
    nickname: "Rafi",
    university: "University of Calgary",
    program: "Electrical Engineering & Computer Engineering",
    year: "3rd Year",
    image: "/images/team/muhammad-rafiuzzaman-fix.jpg",
    university_image: "",
    pronouns: "",
    roles: ["Head Delegate"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/m-rafiuzzaman/",
    instagram: "https://www.instagram.com/raf.i_05/",
    github: "",
    website: "",
    email: "muhammad.rafiuzzaman@ucalgary.ca",
  },
  {
    fname: "Franklin",
    lname: "Ramirez",
    nickname: "",
    university: "University of Waterloo",
    program: "Computer Science & Psychology",
    year: "3rd Year",
    image: "/images/team/franklin-ramirez-fix.jpg",
    university_image: "",
    pronouns: "",
    roles: ["Head Delegate"],
    sub_role: "",
    linkedin: "https://www.linkedin.com/in/franklin611/",
    instagram: "https://www.instagram.com/franklin_g.r/",
    github: "",
    website: "",
    email: "",
  },
  {
    fname: "Carson",
    lname: "Spriggs-Audet",
    nickname: "",
    university: "Concordia University",
    program: "Economics",
    year: "1st Year",
    image: "/images/team/carson-spriggs-audet.png",
    university_image: "",
    pronouns: "",
    roles: ["Head Delegate", "Sponsorship Team"],
    sub_role: "",
    linkedin: "http://www.linkedin.com/in/carsonspriggs",
    instagram: "",
    github: "https://github.com/carsonSgit",
    website: "https://carsonsgit.github.io/",
    email: "carsonspriggs8@gmail.com",
  },
];

export default teamMembers;
