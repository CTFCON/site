function getTopicItemHTML(topic, i) {
    return `<div class="block-wrapper" data-edit="OverPack">
        <div class="image-wrapper view-web" data-aos="fade-up">
            ${topic.speaker.avatar ? `<div class="block-img"><img src="${topic.speaker.avatar}" alt="img"></div>` : ''}
            <div class="name-wrapper">
                <div class="block-name">
                <span>
                    <p>${topic.speaker.name}</p>
                    </span>
                </div>
                <div class="block-post">
                <span><span>
                    <p>${topic.speaker.post}</p>
                    </span></span>
                </div>

                <div class="speaker-intro">
                    ${topic.speaker.intro}
                </div>
            </div>
        </div>
        <div class="text-wrapper" data-aos="fade-left">
            <div class="block-speaker view-mobile">
                <span>${topic.speaker.name} - ${topic.speaker.post}</span>
            </div>
            ${topic.time ? `<div class="block-time">
                <span>${topic.time}</span>
            </div>`: ''}
            <h2 class="block-title">
                <i class="block-icon"><img src="./public/images/${i === 0 ? 'diamonds.svg' : 'triangle.svg'}"
                    alt="img" /></i><span><span>
                    <p>${topic.title}</p>
                </span></span>
            </h2>
            <div class="block-content">
                <span><span>
                    <p>${topic.description}</p>
                </span></span>
            </div>
        </div>
    </div>`
};

const topics = [
    {
        speaker: {
            avatar: '',
            name: 'Alex',
            post: '京东安全实验室安全研究员',
            intro: '京东安全实验室研究员，主要研究领域包括移动端安全对抗、虚拟化、IoT漏洞挖掘，曾担任复旦大学六星战队队长，和团队参与过多场CTF竞赛，获得过2020年DEFCON CTF冠军、强网杯MVP等荣誉。',
        },
        time: '',
        title: 'IoT设备漏洞攻防介绍',
        description: '围绕IoT设备攻击面介绍二进制漏洞的挖掘思路以及自动化程序分析技术，分享在2023年攻防演练利用IoT漏洞突破真实场景下边界网关的实战经验。'
    },
    {
        speaker: {
            name: '母浩文',
            post: '寻臻科技创始人',
            intro: '寻臻科技创始人，Nu1L Team核心队员，曾于蚂蚁金服、安恒信息从事安全研究，研究成果发表于BlackHat USA、Blackhat Europe会议。',
        },
        time: '',
        title: '以安全研究论开放式程序分析',
        description: '从安全研究的角度，重新看待程序分析与漏洞挖掘的关系，结合近几年逐渐热门的Datalog路线代表性程序分析工具，介绍开放式程序分析在安全研究中的用途。'
    },
    {
        speaker: {
            name: 'WHOAMI',
            post: '霄壤实验室研究员',
            intro: '霄壤实验室安全研究员，毕业于山东警察学院，《内网渗透体系建设》作者之一，春秋云境.com靶场内容设计者，擅长Web渗透，主要研究领域包括后渗透、Windows活动目录和域安全。',
        },
        time: '',
        title: 'ManageCA 权限滥用的新方式',
        description: '围绕IoT设备攻击面介绍二进制漏洞的挖掘思路以及自动化程序分析技术，分享在2023年攻防演练利用IoT漏洞突破真实场景下边界网关的实战经验。'
    },
    {
        speaker: {
            name: '董宇骏',
            post: '寻臻科技初创核心成员',
            intro: 'Nu1L Team比赛负责人、寻臻科技核心初创成员，主要研究领域包括静态分析、二进制安全，多次作为主力参与CTF竞赛并取得优异成绩，如DEFCON CTF、0CTF等。',
        },
        time: '',
        title: '再谈Lua字节码攻击',
        description: '以N1CTF题目为例，介绍Lua沙盒逃逸中与字节码有关的攻击面。分享最新版本Lua的字节码攻击方式与缓解措施。'
    },
    {
        speaker: {
            name: 'Q7',
            post: 'sec3高级安全研究员',
            intro: 'Nu1L Team比赛负责人、Sec3安全研究员，主要研究领域包括Web3安全、AI安全、静态分析，多次作为主力参与CTF竞赛并取得优异成绩，如DEFCON CTF、0CTF等。',
        },
        time: '',
        title: 'Solana生态常见安全漏洞',
        description: '通过对几道CTF题目的解析，揭示Solana智能合约中常见的几类漏洞，探讨并分享在Solana生态系统中发现和解决漏洞的实战经验。'
    },
    
]

window.onload = function() {
    // 合作伙伴
    $('.partner .description, .partner-list li').each(function(i, el) {
        $(el).attr({
            'data-aos-delay': i * 50
        });
    });

    $('.timeline').html(topics.map(getTopicItemHTML).join(''));

    var str = $('.time').text();
    $('.time').html('')
    str.split('').forEach(function(item, i) {
        $('.time').append('<div data-aos="fade-up" data-aos-delay="'+ (i * 50) +'">' + item + '</div>')
    })
    
    setTimeout(() => {
        AOS.init();
    }, 100)
}