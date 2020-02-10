var app = new Vue({
    el: '#app',
    data: {
        firstname: 'Dr Katharine A.M.',
        surname: 'Wright',
        address: 'School of Geography, Politics and Sociology · Newcastle University · NE1 7RU',
        telephone: '+44 191 208 023',
        email: 'katharine.a.m.wright@newcastle.ac.uk',

        about: {
            title: 'teaching',
            paragraphs: [
                "I am a Lecturer (Asst. Prof) in International Politics at Newcastle University (UK). My research interests focus on gender and security in institutional settings, with a focus on NATO and EU foreign and security policy. I've also published on Brexit, along with gender and the research process.",

                'My book <a href="https://www.militarygender.com/">NATO, Gender and the Military: Women organising from within</a> (co-authored with Matthew Hurley and Jesus Ignacio Gil Ruiz). Drawing on recently declassified NATO documents, the book argues that NATO has been concerned with gender issues long before the Women, Peace and Security agenda. I have published widely in both leading peer-reviewed academic journals and blogs. ',

                'I have been interviewed on both radio and television and I am always happy to talk to the media about any issue which intersects with my research.',

                'My current research examines how diverging actors (NATO and civil society) engage with the Women, Peace and Security agenda and their perceptions of each other, a critical engagement with feminist foreign policy, and the EU as a gender actor in external affairs. I use a variety of methods in my research including elite interviews and content analysis.'
            ]
        },

        projects: {
            title: 'research',

            projectList: [
                {
                    title: 'Gender and NATO',
                    img: 'gendernato.jpg',
                    decription: "This research examines NATO as a gendered institution, including NATO's engagement with the Women, Peace and Security agenda",
                    publications: [
                        {
                            type: 'book',
                            authors: 'Wright, K A M., Hurley, M and Gil Ruiz, J. I.',
                            year: '2019',
                            title: 'NATO, Gender and the Military: Women Organising from within',
                            url: 'http://www.militarygender.com/',
                            publisher: 'London: Routledge',
                            description: 'The book was launched at NATO HQ in June 2019 with the NATO Secretary General presented with a copy, and was followed by a panel discussion at the Irish Embassy in Brussels co-hosted with WiiS.'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Telling NATO’s Story of Afghanistan: gender and the alliance’s digital diplomacy',
                            url: 'https://journals.sagepub.com/doi/10.1177/1750635217730588',
                            journal: 'Media, War & Conflict',
                            issue: 'Vol. 12 (1), 88-101'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Promoting the Women, Peace and Security agenda',
                            url: 'https://www.iss.europa.eu/sites/default/files/EUISSFiles/EU%20and%20NATO.pdf',
                            journal: 'The EU and NATO: the essential partners',
                            issue: 'EUISS-NATO Defence College'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Making WPS a Reality in 2020: Transparency, Bold Leadership and Resources',
                            url: 'https://www.nato.int/nato_static_fl2014/assets/pdf/pdf_2019_03/20190307_190308-wps-essays-en.pdf',
                            journal: 'Resilience and Resolution A Compendium of Essays on Women, Peace and Security',
                            issue: 'NATO'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M. and Hurley, M.',
                            year: '2017',
                            title: 'Navigating Power and Perceptions when Researching NATO',
                            url: 'https://www.tandfonline.com/doi/abs/10.1080/14616742.2017.1324096',
                            journal: 'International Feminist Journal of Politics',
                            issue: 'Vol. 19 (3), 390-392'
                        },
                        {
                            type: 'article',
                            authors: 'Wright, K A M.',
                            year: '2016',
                            title: 'NATO’s Adoption of UNSCR 1325 on Women, Peace and Security: Making the Agenda a Reality',
                            url: 'https://journals.sagepub.com/doi/10.1177/0192512116638763',
                            journal: 'International Political Science Review',
                            issue: 'Vol. 37 (3), 350-361'
                        }
                    ]
                },

                {
                    title: 'Gender and EU Foreign and Security policy',
                    img: 'genderandeu.jpg',
                    decription: 'gender gender gender gender gender gender',
                    publications: [
                        {
                            authors: 'Wright, K A M. and Guerrina, R.',
                            year: 'in press',
                            title: 'Imagining the European Union: how EU actors (don’t) talk about gender in the digital sphere',
                            url: '#',
                            journal: 'Political Studies Review',
                            issue: 'Vol. (), '
                        },
                        {
                            authors: 'Haastrup, T., Wright, K A M. and Guerrina R.',
                            year: '2019',
                            title: 'Bringing Gender in? EU Foreign and Security Policy After Brexit',
                            url: 'https://www.cogitatiopress.com/politicsandgovernance/article/view/2153',
                            journal: 'Politcs & Governance',
                            issue: 'Vol. 7 (3), 62-71'
                        },
                          {
                            authors: 'Wright, K A M.',
                            year: '2019',
                            title: 'Gendering European Security',
                            url: 'https://www.routledge.com/Contemporary-European-Security-1st-Edition/Galbreath-Mawdsley-Chappell/p/book/9780415473576',
                            journal: 'Contemporary European Security',
                            issue: 'Galbreath, D Mawdsley, M and Chappell, L [Eds]. Routledge'
                        },
                          {
                            authors: 'Guerrina, R and Chappell, L. and Wright, K A M.',
                            year: '2018',
                            title: 'Transforming CSDP?: Feminist Triangles and Gender Regimes',
                            url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jcms.12705',
                            journal: 'JCMS: Journal of Common Market Studies',
                            issue: 'Vol. 56 (5), 1036-1052'
                        },
                          {
                            authors: 'Guerrina, R and Wright, K A M.',
                            year: '2016',
                            title: 'Gendering Normative Power Europe: Lessons of the Women, Peace and Security Agenda',
                            url: 'https://www.cogitatiopress.com/politicsandgovernance/article/view/2153',
                            journal: 'International Affairs',
                            issue: 'Vol. 92 (2), 292-312'
                        },
                    ]
                },
                 {
                    title: 'Brexit',
                    img: 'brexit.jpg',
                    decription: 'Stuff to do with nato and gender gender gender gender gender gender gender gender gender',
                    publications: [
                        {
                            authors: 'Guerrina, R., Wright, K A M. and Haastrup, T.',
                            year: '2020',
                            title: 'Living up to the Women, Peace and Security agenda? - EU Foreign and Security policy after Brexit',
                            url: 'https://blogs.lse.ac.uk/brexit/',
                            publisher: 'LSE Brexit Blog',
                        },
                        {
                            authors: 'Haastrup, T., Wright, K A M. and Guerrina R.',
                            year: '2019',
                            title: 'Bringing Gender in? EU Foreign and Security Policy After Brexit',
                            url: 'https://www.cogitatiopress.com/politicsandgovernance/article/view/2153',
                            journal: 'Politcs & Governance',
                            issue: 'Vol. 7 (3), 62-71'
                        },
                        {
                            authors: 'Haastrup, T., Wright, K A M and Guerrina, R',
                            year: '2019',
                            title: 'Brexit: Gendered Implications for Equality in the UK',
                            url: 'https://www.ingentaconnect.com/content/bup/ejpg/2019/00000002/00000002/art00008',
                            journal: 'European Journal of Politics and Gender',
                            issue: 'Vol. 2 (2), 311-312'
                        },
                         {
                            authors: 'Guerrina, R., Haastrup, T., Wright, K A M., Macrae, H., Masselot, A and Cavaghan, R. ',
                            year: '2018',
                            title: 'Does European Union Studies have a gender problem? Experiences from researching Brexit',
                            url: 'https://www.tandfonline.com/doi/abs/10.1080/14616742.2018.1457881?journalCode=rfjp20',
                            journal: 'International Feminist Journal of Politics',
                            issue: 'Vol. 20 (2), 252-257'
                        },
                         {
                            authors: 'Usherwood, S and Wright, K A M.',
                            year: '2017',
                            title: 'Sticks and stones: Comparing Twitter campaigning strategies in the European Union referendum',
                            url: 'https://journals.sagepub.com/doi/abs/10.1177/1369148117700659',
                            journal: 'British Journal of Politics and International Relations',
                            issue: 'Vol. 19 (2), 371-388'
                        },
                         {
                            authors: 'Usherwood, S and Wright, K A M.',
                            year: '2016',
                            title: 'Talking past each other: the Twitter campaigns',
                            url: 'http://www.referendumanalysis.eu/eu-referendum-analysis-2016/section-7-social-media/talking-past-each-other-the-twitter-campaigns/',
                            journal: 'EU Referendum Analysis 2016: Media, Voters and the Campaign',
                            issue: 'Jackson, D., Thorsen, E., and Wring, D. [Eds]. Bournemouth: The Centre for the Study of Journalism, Culture and Community.'
                        },
                            {
                            authors: 'Haastrup, T., Guerrina, R and Wright, K A M',
                            year: '2016',
                            title: 'Women in the Brexit debate: still largely confined to ‘low’ politics',
                            url: 'https://blogs.lse.ac.uk/brexit/2016/06/17/women-in-the-brexit-debate-still-largely-confined-to-low-politics/',
                            journal: 'LSE Brexit Blog'
                        },
                            {
                            authors: 'Guerrina, R., Haastrup, T and Wright, K A M.',
                            year: '2016',
                            title: 'Is it really that difficult to find women to talk about the EU Referendum?',
                            url: 'https://blogs.lse.ac.uk/impactofsocialsciences/2016/05/19/is-it-really-that-difficult-to-find-women-to-talk-about-the-eu/',
                            journal: 'LSE Impact Blog [Cross posted on the PSA, PSA Women and Politics and LSE Brexit Vote blogs]',
                        },
                    ]
                }
            ]
        },

        teaching: {
            title: 'teaching',
            img: 'teaching.JPG',
            imgAlt: 'Katharine teaching',
            paragraphs: [
                'I am passionate about learning and teaching and have taught on a broad range of Politics and International Relations modules at both undergraduate and postgraduate level across three very different institutions. I currently lead a Security Studies module. ',

                'My approach to teaching is grounded in the belief that students should be actively involved in their own learning. I draw extensively on the problem based approach, for example simulations, to enable students to connect theoretical concepts with empirical reality. I have been involved with a number of student projects giving undergraduates an insight into the research process.',

                'I am a Fellow of the Higher Education Academy, and have a PgCert in Learning and Teaching in Higher Education (PGCAP) with distinction.'
            ]
        },

        media: {
            title: 'teaching',
            img: '',
            imgAlt: '',
            paragraphs: [

            ]
        }

    }
})
