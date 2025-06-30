const sampleListings = [
    {
      title: "Poveglia Island",
      description:
        "Poveglia Island, nestled between Venice and Lido in Italy, is shrouded in a dark history. During the 18th century, it served as a quarantine zone for plague victims, with over 160,000 people perishing there. Later, in the early 20th century, it became a mental asylum where inhumane experiments were rumored. Legends speak of a doctor who went mad and leapt from the bell tower, claiming he was tormented by spirits. Locals believe the island is cursed, and it's now off-limits to visitors.",
      image: {
        filename: "listingimage",
        url: "https://preview.redd.it/6dvsk3bzx1l81.jpg?width=1080&crop=smart&auto=webp&s=adbede0ea34c529f5ca00e9d1a7f71f787c34861",
      },
      price: 12000,
      location: "Venice Lagoon",
      country: "Italy",
    },
    {
      title: "Eastern State Penitentiary",
      description:
        "Located in Philadelphia, USA, the Eastern State Penitentiary was operational from 1829 to 1971. It introduced solitary confinement as a form of rehabilitation, leading many inmates to madness. The prison housed notorious criminals like Al Capone. Visitors and staff have reported eerie experiences, including disembodied voices, shadowy figures, and sudden cold spots. Today, it's a museum offering historical and haunted tours.",
      image: {
        filename: "listingimage",
        url: "https://d1n0c1ufntxbvh.cloudfront.net/photo/4bf94a81/76220/2000x/",
      },
      price: 8500,
      location: "Philadelphia, Pennsylvania",
      country: "USA",
    },
    {
      title: "Aokigahara (Suicide Forest)",
      description:
        "At the base of Mount Fuji in Japan lies Aokigahara Forest, infamously known as the Suicide Forest. Dense vegetation and an eerie silence characterize the area, attributed to the porous lava rock that absorbs sound. The forest has a tragic reputation as a site where many have taken their lives. Japanese mythology speaks of yūrei, or restless spirits, believed to haunt the forest. Visitors often report feelings of unease, and it's advised to stay on marked paths.",
      image:{
        filename: "listingimage",
        url: "https://media.cnn.com/api/v1/images/stellar/prod/180102133840-01-suicide-forest-restricted.jpg?q=w_4300,h_2419,x_0,y_0,c_fill",
      },
      price: 9000,
      location: "Mount Fuji, Honshu",
      country: "Japan",
    },
    {
      title: "Houska Castle",
      description:
        "Situated in the Czech Republic, Houska Castle is renowned for its Gothic architecture and eerie legends. Built in the 13th century, it's said to be constructed over a gateway to Hell, a bottomless pit from which demonic creatures emerged. To seal the gateway, the castle was built with its chapel directly over the hole. Legends tell of prisoners lowered into the pit, emerging with tales of horrific visions and aged beyond recognition. Visitors today report strange occurrences and an unsettling atmosphere.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2norjacsuqNQCHnl0SgW3Er35ND83-Z5Ppw&s",
      },
      price: 7500,
      location: "Blatce, Liberec Region",
      country: "Czech Republic",
    },
    {
      title: "Monte Cristo Homestead",
      description:
        "Located in New South Wales, Australia, the Monte Cristo Homestead is dubbed the country's most haunted house. Built in 1885, it has a history of tragic events, including the death of a child, a maid who fell from a balcony, and a stable boy who burned to death. The most chilling tale is of a mentally ill man kept chained in the caretaker's cottage for decades. Visitors report apparitions, sudden drops in temperature, and unexplained noises. The homestead now operates as a museum and offers ghost tours.",
      image:{
        filename: "listingimage",
        url: "https://www.pedestrian.tv/wp-content/uploads/2018/09/monte-cristo-site.jpg?quality=75",
      },
      price: 10000,
      location: "Junee, New South Wales",
      country: "Australia",
    },
    {
      title: "Château de Brissac",
      description:
        "Known as the tallest castle in France, the Château de Brissac is also home to one of its most infamous ghosts—the Green Lady. Legend has it that Charlotte, the illegitimate daughter of King Charles VII, was murdered by her husband in a jealous rage after discovering her affair. Her ghost is often seen in a green dress, wandering the castle’s tower. Visitors report moaning sounds and icy chills in her former room. The castle operates as both a heritage site and a luxury guesthouse, so brave souls can stay overnight.",
      image:{
        filename: "listingimage",
        url: "https://i.ytimg.com/vi/YkDEL3Dz22I/maxresdefault.jpg",
      },
      price: 14000,
      location: "Brissac-Quincé",
      country: "France",
    },
    {
      title: "The Queen Mary",
      description:
        "Once a luxury ocean liner, now a permanently docked hotel in Long Beach, The Queen Mary has been called one of the most haunted places in America. It served in World War II and was the site of many deaths, including a crewman crushed by a door and a mysterious drowning in the swimming pool. Guests and staff frequently report footsteps in empty corridors, ghostly children playing, and a lady in white gliding across the decks.",
      image:{
         filename: "listingimage",
         url: "https://www.ocregister.com/wp-content/uploads/2021/07/LPT-QUEENABANDON-0709.jpg?w=1024",
      },
      price: 13000,
      location: "Long Beach, California",
      country: "USA",
    },
    {
      title: "Bhangarh Fort",
      description:
        "Situated between Jaipur and Alwar in Rajasthan, Bhangarh Fort is India’s most famous haunted site. Legend tells of a wizard who fell in love with a local princess. When she rejected him, he cursed the town, leading to its destruction. Locals believe spirits roam the ruins, and entry after sunset is officially banned. Visitors often report a sense of being watched and sudden chills. The fort is now an archaeological site, attracting thrill-seekers and ghost hunters.",
      image:{
        filename: "listingimage",
        url: "https://lakshmisharath.com/wp-content/uploads/2019/10/Bhangarh-Fort-15.jpg",
      },
      price: 3000,
      location: "Rajasthan",
      country: "India",
    },
    {
      title: "Banff Springs Hotel",
      description:
        "The Fairmont Banff Springs Hotel in Alberta, Canada, is not only luxurious but legendarily haunted. Stories speak of a bride who tripped on a staircase and died on her wedding day—her ghost is seen dancing in her gown. A ghostly bellhop has also been seen helping guests only to vanish. These tales have become so famous that the hotel embraces its haunted reputation, even offering themed tours.",
      image:{
        filename: "listingimage",
        url: "https://www.fivestaralliance.com/files/fsa/nodes/2009/10263/10263_0_fairmontbanffsprings_fsa-g.jpg?dummy=1414102639",
      },
      price: 20000,
      location: "Alberta",
      country: "Canada",
    },
    {
      title: "Leap Castle",
      description:
        "Leap Castle in Ireland is believed to be one of the most haunted castles in the world. Built in the 13th century, it has a gruesome history of betrayal and murder. The most notorious event was when one brother killed another—a priest—during Mass in what is now known as the Bloody Chapel.The castle is said to be haunted by a dark spirit called the “Elemental,” a creature that emits a rotting stench and brings overwhelming dread. Visitors report being touched, pushed, or hearing growls in empty halls.",
      image:{
        filename: "listingimage",
        url: "https://slievebloom.ie/perch/resources/wp9x3984-w2400h1350.jpg",
      },
      price: 9500,
      location: "Offaly",
      country: " Ireland",
    },
    {
      title: "Tower of London",
      description:
        "The Tower of London, built in 1078, is infamous for its bloody history of torture and executions. One of its most famous ghostly residents is Anne Boleyn, the second wife of King Henry VIII, who was beheaded in 1536. Her ghost has been seen walking near the tower with her head under her arm. Guards, known as Beefeaters, have reported chilling presences, whispers, and shadowy figures. Other spirits include the Princes in the Tower and Lady Jane Grey. It's a major historic site, but also a hub of ghost lore.",
      image:{
        filename: "listingimage",
        url:  "https://www.ancient-origins.net/sites/default/files/styles/article_image/public/field/image/Tower-of-London-Hauntings.jpg?itok=KgDH1qXh",
      },
      price: 11000,
      location: "London",
      country: "United Kingdom",
    },
    {
      title: "La Recoleta Cemetery",
      description:
        "Located in Buenos Aires, La Recoleta Cemetery is a grand necropolis with elaborate tombs, including that of Eva Perón. Among its most famous ghost stories is that of Rufina Cambaceres, a young woman mistakenly buried alive. Her tomb was later opened to reveal scratch marks inside. Another tale speaks of a night watchman who still patrols in spirit. The cemetery’s intricate statues, crypts, and eerie silence contribute to its supernatural reputation.",
      image:{
        filename: "listingimage",
        url: "https://previews.123rf.com/images/fabrizioz/fabrizioz1606/fabrizioz160600013/60517932-buenos-aires-argentina-march-2016-la-recoleta-cemetery-spanish-cementerio-de-la-recoleta-is-a.jpg",
      },
      price: 6000,
      location: "Buenos Aires",
      country: "Argentina",
    },
    {
      title: "Myrtles Plantation",
      description:
        "Located in Louisiana, USA, the Myrtles Plantation is one of America's most haunted homes. Built in 1796, it's reportedly the site of at least 10 murders. The most famous ghost is Chloe, a former enslaved woman who was supposedly hanged after poisoning the family. She is seen in a green turban, often near the veranda. Other spirits include children, Civil War soldiers, and a murdered lawman. The plantation now operates as a bed-and-breakfast with ghost tours.",
      image:{
        filename: "listingimage",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Myrtles_Plantation.jpg",
      },
      price: 10500,
      location: "St. Francisville, Louisiana",
      country: "USA",
    },
    {
      title: "Island of the Dolls (Isla de las Muñecas)",
      description:
        "Hidden in the canals of Xochimilco, Mexico City, this island is festooned with hundreds of decaying, hanging dolls. According to legend, a man named Don Julián Santana found a drowned girl in the canal. To honor her spirit, he began hanging dolls throughout the trees. Over time, locals claimed the dolls were possessed and moved their heads or opened their eyes. Julián was later found drowned in the same spot as the girl. Visitors often feel watched and experience intense unease.",
      image:{
        filename: "listingimage",
        url: "https://content.api.news/v3/images/bin/f92757748c5201120c7dfc52fdd76559",
      },
      price: 5000,
      location: "Xochimilco, Mexico City",
      country: "Mexico",
    },
    {
      title: "Edinburgh Castle",
      description:
        "Edinburgh Castle is one of Scotland’s most iconic landmarks—and one of its most haunted. Built atop Castle Rock, it has seen centuries of battles, torture, and sieges. The most famous specters include a headless drummer boy, French prisoners from the Seven Years' War, and even a phantom dog. Paranormal investigators and tourists have reported sudden chills, footsteps in empty rooms, and ghostly apparitions. It’s one of the most visited haunted landmarks in Europe.",
      image:{
        filename: "listingimage",
        url: "https://www.goscotlandtours.com/uploads/images/products/large/1506-walking-tour-1.jpg",
      },
      price: 9000,
      location: "Edinburgh",
      country: "Scotland",
    },
    {
      title: "Alcatraz Island",
      description:
        "Alcatraz, once America’s most notorious high-security prison, sits isolated in the San Francisco Bay. Inmates included the infamous Al Capone and Machine Gun Kelly. Known for inescapable walls and brutal treatment, it's also infamous for the spirit of Cell 14D, where inmates claimed unseen forces dragged them. Visitors report screams, clanging cell doors, and cold spots. Paranormal teams have captured ghostly voices and footsteps in the cell blocks. It now functions as a museum with night tours that heighten the eerie experience.",
      image:{
        filename: "listingimage",
        url:  "https://thumbs.dreamstime.com/b/north-america-usa-california-san-francisco-alcatraz-prison-united-states-city-209981866.jpg",
      },
      price: 11500,
      location: "San Francisco, California",
      country: "USA",
    },
    {
      title: "The Ancient Ram Inn",
      description:
        "Located in Gloucestershire, England, the Ancient Ram Inn dates back to 1145 and is said to be built on a pagan burial ground. Over the centuries, it served as a priest’s home, inn, and scene of alleged devil worship. Visitors and ghost hunters have experienced poltergeist activity, including being pushed, scratched, or even levitated. One room, called the Witch’s Room, is thought to house the spirit of a woman burned at the stake. It’s considered one of the most terrifying places to sleep overnight.",
      image:{
        filename: "listingimage",
        url: "https://www.exutopia.com/wp-content/uploads/2015/07/Ancient-Ram-Inn-1.jpg",
      },
      price: 8500,
      location: "Wotton-under-Edge, Gloucestershire",
      country: "England",
    },
    {
      title: "Old Changi Hospital",
      description:
        "Built in 1935 in Singapore, Old Changi Hospital was used by the British Royal Air Force before being taken over by Japanese forces during World War II. It is believed to have been a torture facility for the Kempeitai, the Japanese military police. Locals report hearing screams, seeing shadows, and encountering phantom soldiers. Abandoned since the 1990s, it is closed to the public, but thrill-seekers often sneak in. Its decaying halls and blood-stained stories make it one of Asia’s scariest locations.",
      image:{
        filename: "listingimage",
        url: "https://www.roots.gov.sg/-/media/Roots/Changi-Heritage-Trail/Former-Changi-Hospital.ashx",
      },
      price: 4000,
      location: "Changi",
      country: "Singapore",
    },
    {
      title: "The Stanley Hotel",
      description:
        "The Stanley Hotel in Colorado inspired Stephen King's The Shining. Built in 1909, it’s long been rumored to host ghosts. Room 217 is especially infamous—King stayed there during a power outage and experienced strange visions. Guests report luggage unpacking itself, children laughing in halls, and piano music from the empty ballroom. Paranormal tours are offered, and the hotel embraces its eerie reputation.",
      image:{
        filename: "listingimage",
        url: "https://www.stanleyhotel.com/uploads/9/8/6/9/98696462/thestanleyhotel-exterior_orig.jpg", 
      },
      price: 16000,
      location: "Estes Park, Colorado",
      country: "USA",
    },
    {
      title: "Highgate Cemetery",
      description:
        "In London’s Highgate Cemetery, Victorian tombs, overgrown ivy, and ancient mausoleums paint a gothic picture. It’s famous for alleged sightings of a Vampire in the 1970s. Visitors reported black-robed figures, flickering lights, and unearthed coffins. The cemetery houses graves of Karl Marx and other notable figures, but it’s the eerie silence and legends of occult rituals that draw ghost hunters. Paranormal enthusiasts still claim it’s a spiritual hotspot.",
      image:{
        filename: "listingimage",
        url:  "https://media.tourispo.com/images/ecu/entity/e_sight/sight_highgate-cemetery-london_n69652-90864-1_l.jpg",
      },
      price: 6500,
      location: "London",
      country: "United Kingdom",
    },
    {
      title: "Himeji Castle (Okiku’s Well)",
      description:
        "Japan’s Himeji Castle is not just an architectural wonder—it’s haunted by the legend of Okiku, a servant wrongly accused of stealing valuable dishes. After being tortured and thrown into a well, her ghost allegedly counts dishes at night and lets out a chilling scream upon reaching the tenth. The well, known as Okiku’s Well, is still visible, and tourists report strange mists and whispers around it. The castle blends serene beauty with ancient sorrow.",
      image:{
        filename: "listingimage",
        url:  "https://planetofhotels.com/sites/default/files/zamok_himedzi-2.jpg",
      },
      price: 7500,
      location: "Himeji, Hyōgo Prefecture",
      country: "Japan",
    },
    {
      title: "Château de Trécessone",
      description:
        "Deep in the forests of Brittany, France, Château de Trécesson holds a sinister legend. In the 18th century, two men were seen burying a woman alive in her wedding dress. Her ghost, known as The White Lady, is said to haunt the grounds, weeping near the moat. Guests report lights in uninhabited rooms, ghostly figures in white, and unexplainable cold drafts. Though privately owned, it occasionally hosts guided visits.",
      image:{
        filename: "listingimage",
        url: "https://tourisme-broceliande.bzh/voy_content/uploads/2018/03/chateau-de-trecesson_mancheron-caroline-1024x763.jpg",
      },
      price: 10000,
      location: "Morbihan, Brittany",
      country: "France",
    },
    {
      title: "Dražovce Church",
      description:
        "Located in Slovakia, Dražovce Church is an ancient Romanesque building built around the 11th century. Isolated and surrounded by ruins, it's the site of several unexplained phenomena. Locals speak of glowing lights around the church and shadow figures darting through the ruins. In nearby graveyards, visitors have reported ghostly singing. The atmosphere becomes especially unnerving after dusk, making it a hotspot for European ghost hunters.",
      image:{
        filename: "listingimage",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Drazovce.jpg",
      },
      price: 5500,
      location: "Nitra",
      country: "Slovakia",
    },
    {
      title: "Hoia Baciu Forest",
      description:
        "Dubbed the “Bermuda Triangle of Romania,” Hoia Baciu Forest is infamous for paranormal activity. A shepherd and his flock supposedly vanished here without a trace. Visitors report UFO sightings, sudden rashes, nausea, and feelings of being watched. At the heart of the forest is a perfectly circular clearing where no vegetation grows—believed to be a portal to another dimension. Paranormal investigators around the world have captured strange lights and energy readings here.",
      image:{
        filename: "listingimage",
        url: "https://mybestplace.com/uploads/2017/10/Hoia-Baciu-Forest-Romania-1.jpg",
      },
      price: 7500,
      location: "Cluj County",
      country: "Romania",
    },
    {
      title: "Moosham Castle (Witch Castle)",
      description:
        "Located in Austria, Moosham Castle is also known as the Witch Castle due to its gruesome history during the Salzburg Witch Trials. Hundreds of women were tortured and executed here on accusations of witchcraft. Later, it was also believed to be plagued by werewolves and dark rituals. Visitors report hearing chains, screaming, and seeing shadowy figures in the dungeons. Cold spots and feelings of oppression are common, especially near the torture chambers.",
      image:{
        filename: "listingimage",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Unternberg_schloss_moosham.jpg/1200px-Unternberg_schloss_moosham.jpg",
      },
      price: 8200,
      location: "Salzburg",
      country: "Austria",
    },
    {
      title: "Larnach Castle",
      description:
        "Larnach Castle, New Zealand’s only castle, was built in 1871 by politician William Larnach. After the suicide of his wife and daughter, he took his own life. Visitors have reported ghostly apparitions, doors opening on their own, and sudden drops in temperature. The ballroom is particularly haunted, with guests hearing music and whispers when it’s empty. It’s a top destination for ghost tours in New Zealand.",
      image:{
        filename: "listingimage",
        url: "https://dynamic-media.tacdn.com/media/photo-o/2f/b9/14/9e/caption.jpg?w=700&h=500&s=1",
      },
      price: 10000,
      location: "Dunedin, Otago",
      country: "New Zealand",
    },
    {
      title: " Helltown",
      description:
        "Helltown, a deserted area in Ohio, is filled with myths and conspiracy theories. After the government forced people out in the 1970s, rumors swirled about Satanic rituals, mutant creatures, and ghostly figures wandering the woods. The abandoned buildings, foggy roads, and lack of residents contribute to its eerie atmosphere. No overnight stay is allowed here, but many people explore it by day—and some brave it by night.",
      image:{
        filename: "listingimage",
        url: "https://img.atlasobscura.com/FiFWEBbqi5rsgIiQ0ZC676qVwUI2Xc7Xwt3KpUGqTf8/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9jY2Q3/ZDE4YjlmODA3MzJl/NDlfSGVsbHRvd24u/anBn.jpg",
      },
      price: 6000,
      location: "Ohio",
      country: "USA",
    },
    {
      title: "Fort George (The Citadel)",
      description:
        "Fort George, located in Nova Scotia, Canada, is a star-shaped fortress from the 18th century, now known as The Halifax Citadel. It was a key military site during the British colonial period. Numerous soldiers died here in battle, and many are believed to still roam the grounds. Ghosts of red-coated soldiers have been seen patrolling at night, and footsteps are often heard in empty corridors. The ghost tour leads into deep, dimly-lit tunnels where many report sudden temperature drops and invisible touches.",
      image:{
        filename: "listingimage",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Citadel_hill.jpg",
      },
      price: 9000,
      location: "Halifax, Nova Scotia",
      country: "Canada",
    },
    {
      title: "St. Augustine Lighthouse",
      description:
        "Built in 1874, the St. Augustine Lighthouse in Florida is haunted by several spirits. Two young sisters drowned near the lighthouse during construction and are often seen playing and laughing. Ghostly footsteps on the stairs, shadow figures, and disembodied voices are common during night tours. The lighthouse has been featured on many paranormal TV shows and remains one of the most active ghost locations in the U.S.",
      image:{
        filename: "listingimage",
        url: "https://www.staugustinelighthouse.org/wp-content/uploads/2014/10/St-Augustine-Lighthouse-and-Museum-Grounds2.jpg",
      },
      price: 9500,
      location: "St. Augustine, Florida",
      country: "USA",
    },
  ];
  
  module.exports = { data: sampleListings };