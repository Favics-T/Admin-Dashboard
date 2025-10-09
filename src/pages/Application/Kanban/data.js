export const kanbanData =[
    {
        type:"To Do Task",
        components:[
            {
                title:'Webdev',
                team:"Cisco Team",
                attachment:"7",
                message:"8",
                days:"12 days"
            },
            {
                title:'Create a new theme',
                team:"Gento Team",
                attachment:"3",
                message:"5",
                days:"9 days"
            },
            {
                title:'Improve social banners',
                team:"Developing Team",
                attachment:"5",
                message:"9",
                days:"17 days"
            },
            {
                title:'Health app',
                team:"Design Team",
                attachment:"2",
                message:"7",
                days:"21 days"
            }
        ]
    },

     {
        type:"In Progress",
        components:[
            {
                title:'Cloud computing',
                team:"Gento Team",
                attachment:"2",
                message:"0",
                days:"31 days"
            },
            {
                title:'Update subscription',
                team:"Developing Team",
                attachment:"5",
                message:"4",
                days:"15 days"
            },
            {
                title:'Poster design',
                team:"Design Team",
                attachment:"10",
                message:"4",
                days:"5 days"
            },
                    ]
    },

     {
        type:"In Progress",
        components:[
            {
                title:'Landing page',
                team:"Design Team",
                attachment:"7",
                message:"8",
                days:"11 days"
            },
            {
                title:'Food app design',
                team:"Design Team",
                attachment:"4",
                message:"5",
                days:"21 days"
            },
            {
                title:'Web design',
                team:"Cisco Team",
                attachment:"12",
                message:"8",
                days:"14 days"
            },
            {
                title:'Flyer design',
                team:"Developing Team",
                attachment:"6",
                message:"7",
                days:"22 days"
            },
            {
                title:'Flyer design',
                team:"Developing Team",
                attachment:"6",
                message:"7",
                days:"22 days"
            },
            {
                title:'Cloud computing',
                team:"Gento Team",
                attachment:"6",
                message:"0",
                days:"12 days"
            },
        ]
    }

]

export  const tasks = {
  todo: [
    {
      id: "t1",
      title: "Website revamp",
      team: "Cisco Team",
      date: "08",
      comments: 4,
      attachments: 3,
      members: ["al", "br", "cm"],
    },
    {
      id: "t2",
      title: "Create a new theme",
      team: "Design Team",
      date: "12",
      comments: 2,
      attachments: 1,
      members: ["dn", "ev"],
      tag: { label: "High", tone: "high" },
    },
    {
      id: "t3",
      title: "Improve social banners",
      team: "Marketing",
      date: "15",
      comments: 6,
      attachments: 2,
      members: ["cm", "fg", "al"],
    },
    {
      id: "t4",
      title: "Health app",
      team: "Design Team",
      date: "18",
      comments: 0,
      attachments: 0,
      members: ["ev"],
    },
  ],
  progressA: [
    {
      id: "p1",
      title: "Cloud computing",
      team: "Gatia Team",
      date: "09",
      comments: 9,
      attachments: 5,
      members: ["al", "br", "cm", "dn"],
      tag: { label: "On track", tone: "ok" },
    },
    {
      id: "p2",
      title: "Update subscription",
      team: "Sales",
      date: "10",
      comments: 8,
      attachments: 4,
      members: ["cm", "fg"],
    },
    {
      id: "p3",
      title: "Poster design",
      team: "Design",
      date: "11",
      comments: 3,
      attachments: 2,
      members: ["al", "ev"],
    },
  ],
  progressB: [
    {
      id: "pb1",
      title: "Landing page",
      team: "Design Team",
      date: "07",
      comments: 13,
      attachments: 8,
      members: ["al", "br", "cm", "dn"],
    },
    {
      id: "pb2",
      title: "Food app design",
      team: "UI Team",
      date: "09",
      comments: 7,
      attachments: 4,
      members: ["cm", "fg"],
      tag: { label: "Blocked", tone: "warn" },
    },
    {
      id: "pb3",
      title: "Web design",
      team: "Agency",
      date: "10",
      comments: 12,
      attachments: 7,
      members: ["al", "ev"],
    },
    {
      id: "pb4",
      title: "Flyer design",
      team: "Design Team",
      date: "11",
      comments: 8,
      attachments: 5,
      members: ["dn", "cm", "fg"],
    },
    {
      id: "pb5",
      title: "Cloud computing",
      team: "Gatia Team",
      date: "12",
      comments: 9,
      attachments: 5,
      members: ["al", "br", "cm"],
    },
  ],
};

export const members =[
    {id:'al', name:"Alice Lim"},
    {id:"br", name:"Brian Ross"},
    {id:"cm", name:"Carmen Mo"},
     {id:'dn', name:"Dino N."},
    {id:"ev", name:"Evan V"},
    {id:"fg", name:"Faye G"}
]

export const tokens = {
  bg: "#FBFBFD",
  panel: "#FFFFFF",
  border: "#EAEAF2",
  textMuting: "#6B7280",
  primary: "#6C5CE7", 
  primarySoft: "#F3F0FF",
};
