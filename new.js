document.addEventListener('DOMContentLoaded', () => {
    const langData = {
        zh: {
            app_title: "橘猫重生复仇记",
            nav_abyss: "深渊",
            nav_choice: "抉择",
            nav_revenge: "复仇",
            nav_judgment: "审判",
            nav_sunshine: "暖阳",
            hero_title: "一念深渊，一世复仇",
            hero_subtitle: "一个关于背叛与重生的故事。你的选择，将决定他的命运。",
            ep1_title: "第一集：深渊",
            ep1_subtitle: "两年，51万——这串用他的青春和健康换来的数字，最终只化为重庆江边的一阵风。他为这场奔赴，吃下了两个月来第一顿肉，却成了他人生的最后一餐。",
            ep1_card1_title: "卑微的梦",
            ep1_card1_text: "他住在终年不见阳光的隔断间，对猫喃喃自语：‘再等等，等我凑够钱，就给她开梦想中的花店，然后我们就结婚。’这是他对抗全世界疲惫的唯一信念。",
            ep1_card2_title: "残酷的现实",
            ep1_card2_text: "他等来的不是未婚妻，而是她挽着保时捷车主的刺眼笑容。在转完最后一笔钱，备注“自愿赠予”后，他纵身跃入冰冷的江水，结束了这笑话般的人生。",
            ep1_button: "查看最后的聊天记录",
            choice_title: "命运的十字路口",
            choice_subtitle: "站在江边，万念俱灰的林默，脑中闪过最后的念头。是就这样结束一切，还是……",
            choice_a_text: "当面对质",
            choice_b_text: "隐忍复仇",
            choice_reset_button: "返回，重新选择命运",
            path_a_ep2_title: "A-2: 最后的对峙",
            path_a_ep2_subtitle: "他用尽最后的力气，拨通了谭欣的电话，歇斯底里地质问着一切。电话那头，只有不耐烦的嘲讽和保时捷男友轻蔑的警告。他的尊严被彻底碾碎。",
            path_a_ep3_title: "结局A: 无声的消逝",
            path_a_ep3_subtitle: "电话挂断，世界重归死寂。他输得一败涂地，连复仇的念想也一同沉入江底。第二天，新闻报道了一则无人认领的溺亡事件，无人关心他是谁，也无人记得他的故事。",
            ep2_title: "B-2: 新生",
            ep2_subtitle: "意识在黑暗中重聚，他发现自己被困在一个柔软的身体里。他成了橘猫元宝，带着前世所有的记忆和怨恨，在一个全新的世界里，蛰伏着。",
            ep2_card1_title: "猫的躯体，人的灵魂",
            ep2_card1_text: "新主人苏晚给了他顶级的猫生。他努力适应四条腿走路，对抗追逐光点的本能，并竖起耳朵，在旁听商业会议中学习金融、法律与人性。",
            ep2_card2_title: "复仇之火",
            ep2_card2_text: "夜晚，他用还不甚熟练的肉垫和鼻尖，在平板上搜索仇人的名字。当‘谭欣’的名字出现在一场晚宴名单上时，他碧绿的猫眼里，燃起了地狱之火。",
            ep3_title: "B-3: 复仇之路",
            ep3_subtitle: "一场精心策划的复仇，每一步都精准地踩在谭欣的痛点上。他不再是那个卑微的林默，而是藏在暗处，操纵一切的复仇之神。",
            ep3_card1_title: "第一步：扰乱",
            ep3_card1_text: "晚宴上“意外”的红酒，让她精心维持的优雅第一次当众破裂。这是他送上的第一份礼物，也是她噩梦的开始。",
            ep3_card2_title: "第二步：恐吓",
            ep3_card2_text: "他潜入花店，在她最得意的花艺作品核心，放上了一只死老鼠。他在黑暗中欣赏着她的尖叫与崩溃。",
            ep3_card3_title: "第三步：搜证",
            ep3_card3_text: "项圈摄像头拍下的致命聊天记录，以及从她旧手包里找到的、存有黑历史的U盘，为最后的审判备好了最锋利的刀刃。",
            ep6_title: "B-4: 审判",
            ep6_subtitle: "投资发布会，是谭欣人生的巅峰。她含泪讲述着“艰苦创业”的故事，殊不知，这将是她坠入地狱的开始。当大屏幕亮起，所有的谎言和罪恶都将公之于众。",
            ep6_button: "观看审判现场",
            ep7_title: "结局B: 暖阳",
            ep7_subtitle: "当仇恨散去，复仇的火焰终归熄灭。他没有感到狂喜，只有一种漫长的、疲惫的解脱。他终于能像一只真正的猫那样，享受一餐美味的金枪鱼罐头。",
            ep7_card_title: "新的猫生",
            ep7_card_text: "他不再是复仇的鬼魂，他是一只被爱着的、有家的猫。在苏晚温暖的怀抱里，他发出了满足的、响亮的呼噜声。窗外，新月明亮，照亮了前路。",
            footer_text: "一个故事的结束，是另一个故事的开始。",
            chat_header: "谭欣",
            chat_log: [ { type: 'sent', text: "花店是怎么回事？" }, { type: 'sent', text: "那些钱……" }, { type: 'received', text: "林默，我们分手吧。" }, { type: 'received', text: "那些钱，是你自愿给我的，算是我们谈恋爱期间的共同基金。" }, { type: 'sent', text: "你说过要结婚的。" }, { type: 'received', text: "你太幼稚了，那点钱在重庆能做什么？" }, { type: 'sent', text: "我为了你，两年没吃过一顿好的……" }, { type: 'received', text: "那是你自己的事，我没逼你。" }, { type: 'system', text: "你已被对方拉黑" } ],
            evidence_video: {
                connecting: "连接投影仪...",
                scenes: [
                    { type: 'title', text: "证据一：聊天记录" },
                    { type: 'quote', text: "“那是你自己的事，我没逼你。”" },
                    { type: 'title', text: "证据二：与“金主”的对话" },
                    { type: 'quote', text: "“那个傻子又打了十万过来...”" },
                    { type: 'title', text: "最终证据：51万转账" },
                    { type: 'quote', text: "备注：“自愿赠予”" },
                    { type: 'title', text: "以及...林默最后的汉堡" },
                    { type: 'final', text: "“我以后再也不吃素菜了...”", emoji: "🍔" }
                ],
                ended: "播放结束"
            }
        },
        en: {
            app_title: "The Reborn Cat's Revenge",
            nav_abyss: "Abyss",
            nav_choice: "Choice",
            nav_revenge: "Revenge",
            nav_judgment: "Judgment",
            nav_sunshine: "Sunshine",
            hero_title: "An Abyss of Betrayal, A Lifetime of Revenge",
            hero_subtitle: "A story of betrayal and rebirth. Your choice will decide his fate.",
            ep1_title: "Episode 1: The Abyss",
            ep1_subtitle: "Two years, 510,000 yuan—a figure bought with his youth and health, ultimately vanished into the wind by the Chongqing river. For this journey, he ate his first real meal in two months, which became his last.",
            ep1_card1_title: "A Humble Dream",
            ep1_card1_text: "In a sunless room, he murmured to his cat: 'Just a little longer, when I have enough, I'll open her dream flower shop, and then we'll get married.' This was the only faith that kept him going.",
            ep1_card2_title: "A Cruel Reality",
            ep1_card2_text: "He wasn't greeted by his fiancée, but by the jarring sight of her with a man in a Porsche. After transferring his last money with the note 'Willingly Gifted', he leaped into the cold river, ending his laughable life.",
            ep1_button: "View The Last Chat",
            choice_title: "Crossroads of Fate",
            choice_subtitle: "Standing by the river, utterly devastated, a final thought flashes through Lin Mo's mind. Should he end it all now, or...",
            choice_a_text: "Confront Her Directly",
            choice_b_text: "Endure and Take Revenge",
            choice_reset_button: "Go Back, Choose Again",
            path_a_ep2_title: "A-2: The Final Confrontation",
            path_a_ep2_subtitle: "With his last ounce of strength, he called Tan Xin, hysterically questioning everything. The other end of the line met him with impatient mockery and a contemptuous warning from the Porsche boyfriend. His dignity was utterly crushed.",
            path_a_ep3_title: "Ending A: A Silent Disappearance",
            path_a_ep3_subtitle: "The call ended, and the world returned to a dead silence. He had lost completely; even the thought of revenge sank to the bottom of the river. The next day, the news reported an unidentified drowning, and no one cared who he was or remembered his story.",
            ep2_title: "B-2: Rebirth",
            ep2_subtitle: "Consciousness re-formed in darkness. He found himself trapped in a soft body. He became the orange cat Yuanbao, carrying all past memories and hatred, lying in wait in a brand new world.",
            ep2_card1_title: "A Human Soul in a Cat's Body",
            ep2_card1_text: "His new owner, Su Wan, gave him a life of luxury. He struggled to adapt, fighting his feline instincts while secretly learning about finance, law, and human nature by listening to business meetings.",
            ep2_card2_title: "The Fire of Revenge",
            ep2_card2_text: "By night, he used his clumsy paws and nose to search for his enemy on a tablet. When 'Tan Xin' appeared on a gala guest list, his emerald cat eyes burned with the fires of hell.",
            ep3_title: "B-3: The Path of Revenge",
            ep3_subtitle: "A meticulously planned revenge, each step striking Tan Xin's weak points. He was no longer the humble Lin Mo, but the god of vengeance pulling the strings from the shadows.",
            ep3_card1_title: "Step 1: Disruption",
            ep3_card1_text: "An 'accidental' wine spill at the gala shattered her carefully maintained elegance in public for the first time. It was his first gift, and the beginning of her nightmare.",
            ep3_card2_title: "Step 2: Intimidation",
            ep3_card2_text: "He snuck into her flower shop and placed a dead mouse in her proudest creation. He savored her screams of collapse from the darkness.",
            ep3_card3_title: "Step 3: Evidence",
            ep3_card3_text: "The collar camera captured damning chats, and a U-disk found in her old purse sharpened the blade for the final judgment.",
            ep6_title: "B-4: The Judgment",
            ep6_subtitle: "The investment conference was the peak of Tan Xin's life. As she tearfully told her story of 'hardship', she didn't know it was the start of her descent into hell. When the big screen lit up, all lies would be exposed.",
            ep6_button: "Witness The Judgment",
            ep7_title: "Ending B: The Sunshine",
            ep7_subtitle: "When hatred faded, the flames of revenge were finally extinguished. He felt no ecstasy, only a long, weary release. He could finally enjoy a delicious can of tuna, like a real cat.",
            ep7_card_title: "A New Feline Life",
            ep7_card_text: "He was no longer a ghost of vengeance, but a beloved cat with a home. In Su Wan's warm embrace, he purred with contentment. Outside, the new moon was bright, illuminating the path ahead.",
            footer_text: "The end of one story is the beginning of another.",
            chat_header: "Tan Xin",
            chat_log: [ { type: 'sent', text: "What's with the flower shop?" }, { type: 'sent', text: "And the money..." }, { type: 'received', text: "Lin Mo, let's break up." }, { type: 'received', text: "That money was a gift, a fund for our relationship. You gave it willingly." }, { type: 'sent', text: "You said we would get married." }, { type: 'received', text: "You're so naive. What can that little money do in this city?" }, { type: 'sent', text: "For you, I ate poorly for two years..." }, { type: 'received', text: "That's your own business. I didn't force you." }, { type: 'system', text: "You have been blocked by this user" } ],
            evidence_video: {
                connecting: "Connecting to projector...",
                scenes: [
                    { type: 'title', text: "Evidence 1: Chat Log" },
                    { type: 'quote', text: "“That's your own business. I didn't force you.”" },
                    { type: 'title', text: 'Evidence 2: Chats with "Benefactors"' },
                    { type: 'quote', text: "“That fool sent another 100k...”" },
                    { type: 'title', text: "Final Evidence: The 510,000 Transfer" },
                    { type: 'quote', text: 'Note: “Willingly gifted”' },
                    { type: 'title', text: "And... Lin Mo's Last Hamburger" },
                    { type: 'final', text: "“I won't eat veggie meals anymore...”", emoji: "🍔" }
                ],
                ended: "Playback Ended"
            }
        }
    };
    let currentLang = 'zh';
    const langToggleBtn = document.getElementById('lang-toggle-btn');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (langData[lang] && langData[lang][key]) {
                el.textContent = langData[lang][key];
            }
        });
        document.documentElement.lang = lang;
        langToggleBtn.textContent = lang === 'zh' ? 'EN' : '中文';
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage(currentLang);
    });

    const storySections = document.querySelectorAll('.story-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    storySections.forEach(section => {
        observer.observe(section);
    });

    const chatModal = document.getElementById('chat-modal');
    const viewChatBtn = document.getElementById('view-chat-btn');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatHeader = document.getElementById('chat-header');
    const chatBody = document.getElementById('chat-body');

    const openChatModal = () => {
        chatHeader.textContent = langData[currentLang].chat_header;
        chatBody.innerHTML = '';
        langData[currentLang].chat_log.forEach(msg => {
            const el = document.createElement('div');
            if (msg.type === 'system') {
                el.className = 'flex items-center justify-center my-2';
                el.innerHTML = `<span class="text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded-full">${msg.text}</span>`;
            } else {
                el.className = `chat-bubble ${msg.type === 'sent' ? 'chat-sent' : 'chat-received'}`;
                el.textContent = msg.text;
            }
            chatBody.appendChild(el);
        });
        chatModal.classList.remove('hidden');
    };

    viewChatBtn.addEventListener('click', openChatModal);
    closeChatBtn.addEventListener('click', () => chatModal.classList.add('hidden'));
    chatModal.addEventListener('click', (e) => {
        if (e.target === chatModal) {
            chatModal.classList.add('hidden');
        }
    });

    const evidenceModal = document.getElementById('evidence-modal');
    const viewEvidenceBtn = document.getElementById('view-evidence-btn');
    const closeEvidenceBtn = document.getElementById('close-evidence-btn');
    const evidenceContent = document.getElementById('evidence-content');
    const progressBar = document.getElementById('progress-bar');
    const videoStatus = document.getElementById('video-status');
    const videoTimestamp = document.getElementById('video-timestamp');

    let evidenceTimeouts = [];
    let progressInterval = null;

    const stopEvidencePlayback = () => {
        if (evidenceTimeouts.length > 0) {
            evidenceTimeouts.forEach(clearTimeout);
            evidenceTimeouts = [];
        }
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    };

    const openEvidenceModal = () => {
        stopEvidencePlayback();

        evidenceModal.classList.remove('hidden');
        evidenceContent.innerHTML = '';

        const videoData = langData[currentLang].evidence_video;
        const totalDuration = 12;
        let currentTime = 0;

        progressBar.style.width = '0%';
        videoStatus.textContent = "▶ PLAYING";
        videoTimestamp.textContent = `0:00 / 0:${totalDuration}`;

        const connectingEl = document.createElement('div');
        connectingEl.className = 'evidence-item text-xl text-gray-400';
        connectingEl.textContent = videoData.connecting;
        evidenceContent.appendChild(connectingEl);

        let delay = 1500;
        videoData.scenes.forEach((scene, index) => {
            const timeoutId = setTimeout(() => {
                evidenceContent.innerHTML = '';
                const el = document.createElement('div');
                el.className = 'evidence-item';

                if (scene.type === 'title') {
                    el.className += ' text-3xl md:text-4xl font-bold';
                } else if (scene.type === 'quote') {
                    el.className += ' text-xl md:text-2xl text-red-400 italic';
                } else if (scene.type === 'final') {
                    el.className += ' text-2xl md:text-3xl font-bold';
                    el.innerHTML = `${scene.text} <span class="text-5xl">${scene.emoji}</span>`;
                }
                if (scene.type !== 'final') el.textContent = scene.text;

                evidenceContent.appendChild(el);
            }, delay * (index + 1));
            evidenceTimeouts.push(timeoutId);
        });

        progressInterval = setInterval(() => {
            currentTime++;
            const progress = (currentTime / totalDuration) * 100;
            progressBar.style.width = `${progress}%`;
            videoTimestamp.textContent = `0:${String(currentTime).padStart(2, '0')} / 0:${totalDuration}`;
            if (currentTime >= totalDuration) {
                clearInterval(progressInterval);
                videoStatus.textContent = "■ ENDED";
            }
        }, 1000);
    };

    const closeEvidenceModal = () => {
        evidenceModal.classList.add('hidden');
        stopEvidencePlayback();
    };

    if(viewEvidenceBtn) viewEvidenceBtn.addEventListener('click', openEvidenceModal);
    closeEvidenceBtn.addEventListener('click', closeEvidenceModal);
    evidenceModal.addEventListener('click', (e) => {
        if (e.target === evidenceModal) {
            closeEvidenceModal();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const choiceSection = document.getElementById('choice-section');
    const choiceA_Btn = document.getElementById('choice-a-btn');
    const choiceB_Btn = document.getElementById('choice-b-btn');
    const branchA_Content = document.getElementById('branch-a-content');
    const branchB_Content = document.getElementById('branch-b-content');
    const resetChoiceBtn = document.getElementById('reset-choice-btn');

    const makeChoice = (path) => {
        choiceSection.style.display = 'none';
        if (path === 'A') {
            branchA_Content.classList.remove('hidden');
            branchA_Content.querySelectorAll('.story-section').forEach(section => observer.observe(section));
        } else {
            branchB_Content.classList.remove('hidden');
            branchB_Content.querySelectorAll('.story-section').forEach(section => observer.observe(section));
        }
    };

    const resetChoice = () => {
        branchA_Content.classList.add('hidden');
        branchB_Content.classList.add('hidden');
        choiceSection.style.display = 'block';
        choiceSection.scrollIntoView({ behavior: 'smooth' });
    };

    choiceA_Btn.addEventListener('click', () => makeChoice('A'));
    choiceB_Btn.addEventListener('click', () => makeChoice('B'));
    resetChoiceBtn.addEventListener('click', resetChoice);

    updateLanguage(currentLang);
});