<template>
    <v-app class="a4">
        <v-container>
            <div id="header"/>
            <Introduction :introduction="introduction"/>
            <WorkHistory :jobs="jobs"/>
            <Education :educations="educations"/>
            <Interests :interests="interests"/>
        </v-container>
    </v-app>
</template>
<style>
    @import url('https://fonts.googleapis.com/css?family=Nunito:300,400');

    @page {
        size: A4;
        margin: 0.5cm 0.2cm;
    }

    @page :first {
        margin-top: 0;
    }

    html {
        -webkit-print-color-adjust: exact;
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-size: medium;
    }

    /*h1 {*/
    /*    font-weight: 300;*/
    /*    margin: 40px 0 0;*/
    /*}*/

    /*h3 {*/
    /*    margin: 40px 0 0;*/
    /*}*/

</style>
<style scoped>


    #header {
        height: 15px;
        width: 100%;
        border-width: 0.5em;
        background-color: #233B64;
    }

    .a4 {
        -webkit-print-color-adjust: exact;
        /*margin: auto;*/
        width: 794px;
    }
</style>
<script>

    import WorkHistory from "./components/workhistory/WorkHistory";
    import Introduction from "./components/introduction/Introduction";
    import Interests from "./components/footer/Interests";
    import Education from "./components/footer/Education";

    export default {
        name: 'App',

        components: {Education, Interests, Introduction, WorkHistory},

        data: () => ({
            introduction: {
                name: "Peter Varsanyi",
                jobTitle: "Senior Software Engineer",
                header: "Passionate Software Engineering professional offering <b>5+</b> years of experience. Enthusiastic about developing forward-thinking solutions to tomorrow's productivity problems. Resourceful and adaptable approach to challenges. Delivering innovative, reliable and simple solutions. Recognized for work ethic, problem-solving skills and successful delivery of work.",

                linkedin: {
                    link: "https://www.linkedin.com/in/gwelican",
                    text: "linkedin.com/in/gwelican"
                },
                location: "Bellevue, WA",
                github: {
                    link: "https://github.com/gwelican",
                    text: "github.com/gwelican"
                },
                email: process.env.VUE_APP_EMAIL,
                phone: process.env.VUE_APP_PHONE,
            },
            about: {
                skills: {
                    "Languages": [
                        "Java",
                        "C", "C++",
                        //"C#",
                        "SQL",
                        "Python",
                        //"Ruby",
                        //"Perl",
                        "Shell script",
                        // "Scala(beginner)",
                        //"Go"
                    ],
                    "Web Development": [
                        "HTML5", "CSS3", "Javascript", "Typescript",
                        "JSON", "XML", "REST", "VueJS",
                        "JSF",
                    ],
                    "Technologies": ["Spring boot", "Jenkins", "Docker", "Git/Github", "Intellij"],
                    "Database": ["MySQL", "PostgreSQL", "Oracle", "Neo4j", "Solr", "Redis", "MongoDB"],
                    "Operating System": ["AIX", "Linux", "Solaris", "BSD", "Unix"]
                }
            },
            jobs: [
                {
                    title: "Senior Software Engineer",
                    start: "09/2017",
                    end: "present",
                    company: "EPAM Systems",
                    location: "Bellevue, WA",
                    summary: "",
                    teams: [
                        {
                            name: "Devops & Tools",
                            responsibilities: [
                                "Drive standardization of development/deployment across the department to reduce ramp-up time and improve interoperability among teams.",
                                "Implement cross cutting concerns(distributed tracing, metrics collection) on a department level, improve alert reliability. Research best practices and share it with the department.",
                                "Advocate 12 factor development so that deployments microservices are deployed in a consistent, clean manner.",
                                "Maintain high quality spring boot based cloud native template to bootstrap new projects easily, embracing convention over configuration to make the template as simple as possible."
                            ],
                            skills: "Spring Boot, Jenkins/AWS Codebuild, Java11, SonarQube, Amazon Lambda, AWS Cloudformation, Haystack, Prometheus, InfluxDB, Grafana",
                        },
                        {
                            name: "Cost Adjustment Tool",
                            responsibilities: [
                                "Lead team of 3 offshore engineers. Mentor, motivate and collaborate with team to continuously integrate and deploy our Java Spring-based microservices into AWS.",
                                "Gather requirements, define scopes, allocate resources and execute scrum ceremonies.",
                                "Organize triage meetings to prioritize incoming requests, closely work with stakeholders: negotiate priorities, report progress, drive user acceptance tests.",
                                "Advocate for clean code, establish coding standards and review process to improve code quality. Introduce SonarQube for automated code review.",
                            ],
                            skills: "Spring Boot, JPA/Hibernate, Jenkins, Java8, Java10, Angular6+typescript, Mockito, SonarQube, Amazon RDS(Aurora-mysql), SQS, S3, EC2/VPC, Route53, Terraform, Gradle, Flyway, Sleuth, Hystrix, Spring Data, Spring Retry",
                        },

                    ],
                },
                {
                    title: "Senior Software Engineer",
                    start: "04/2017",
                    end: "10/2017",
                    company: "WME-IMG",
                    location: "London, UK",
                    teams: [
                        {
                            responsibilities: [
                                "Design/build a scalable backend REST architecture, that can stream online sport events to customers on both mobile and web platforms. Deploy into AWS using Ansible.",
                                "Implement oauth2 integration with providers such as Facebook/Google",
                                "Create high performance SQL queries to allow the platform to scale",
                                "Set up Sonarqube to increase the code quality"
                            ],
                            skills: "Dropwizard, Docker, Jenkins, Java8, Mockito, Maven, SonarQube, Amazon Aurora, Amazon SQS, Amazon EC2/VPC/Load balancer, Ansible"
                        }
                    ],
                },
                {
                    title: "Software Engineer",
                    start: "01/2016",
                    end: "04/2017",
                    company: "Gamesys Ltd",
                    location: "London, UK",
                    teams: [
                        {
                            name: "Platform team",
                            responsibilities: [
                                "Develop microservice skeleton project called Atlas built on Dropwizard so that developers can easily bootstrap new projects.",
                                "Provide guidance and best practices for teams in the department.",
                                "Maintain build servers and pipelines(GoCD), provide ansible playbooks for dev and prod deployments.",
                                "Implement centralized login flow using AAA(Authentication Authorization Accounting) for microservices, using JWT tokens.",
                            ],
                            skills: "Ansible, Dropwizard, Java8, Mockito, Maven, Docker, GoCD, Sonarqube, Apache Cloudstack, Mysql",
                        },
                        {
                            name: "Member Team",
                            responsibilities: [
                                "Design/build backend REST services to enable customer support employees to keep track of members, collect evidences that can be used in investigation for money laundering.",
                                "Develop frontend (Sencha ExtJS) to talk to backend.",
                                "Maintain legacy Ruby on Rails member management application.",
                                "Migrate legacy applications to java8.",
                                "Break huge monolith up to several microservices."
                            ],
                            skills: "Ansible, Dropwizard, Docker, Java7/8, Mockito Maven, Mysql, Sencha ExtJS",
                        },
                    ]
                },
                {
                    title: "Software Engineer",
                    start: "03/2014",
                    end: "01/2016",
                    company: "EPAM Systems",
                    location: "Hungary",
                    teams: [
                        {
                            name: "Thomas Cook",
                            responsibilities: [
                                "Develop high performance Spring based backend search platform in java.",
                                "Develop Solr plugins to list the best results for different customer types(older/younger couple, couple with child etc..).",
                                "Load hotel and flight data from external service providers by python/java.",
                                "Develop JSF web app to monitor load times and provide an interface for the customer to apply configuration to the system.",
                            ],
                            skills: "Java7, Maven, Python, Jenkins, Mockito, Easymock, TestNG, Junit, Spring, JSF(Primefaces), Solr, Sonarqube, Chef, Hibernate/JPA",
                        }
                    ]
                },
                {
                    title: "Unix Operation Analyst",
                    start: "09/2006",
                    end: "03/2007",
                    company: "Morgan Stanley",
                    location: "Hungary",
                    teams: [
                        {
                            responsibilities: [
                                "Provide support, maintenance for 4000 servers in London, 12000 servers globally.",
                                "Troubleshoot production issues in war-rooms and provide root cause analysis.",
                                "Maintain and provision new storage over NAS and SAN.",
                            ],
                        }
                    ]
                },
                {
                    title: "IT System Supervisor",
                    start: "01/2005",
                    end: "09/2006",
                    company: "IBM",
                    location: "Hungary",
                    teams: [
                        {
                            responsibilities: [
                                "Provide L1/L2 support for AIX/HP-UX based SAP servers",
                                "Monitor servers via Perl based monitoring tool",
                                "Execute changes, such as system copy from prod to QA, oracle database/SAP upgrades"
                            ]
                        }
                    ]
                },
            ],
            educations: [
                "2016 - Alba Regia University Centre of Óbuda University - Bachelor Degree in Electrical Engineering, Major: Computer Networking"
            ],
            interests: {
                sport: "Squash, Badminton, Riding bicycle, Flying my drone",
                other: "Reading tech books, Learning new technologies, 3D printing, World of Warcraft, Rocket League"
            }
            //
        }),
    };
</script>
