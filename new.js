document.addEventListener('DOMContentLoaded', () => {
    const langData = {
        zh: {
            app_title: "橘猫重生复仇记",
            nav_abyss: "深渊",
            nav_choice: "抉择",
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
            ep3_title: "B-3: 复仇之路",
            ep3_subtitle: "一场精心策划的复仇，每一步都精准地踩在谭欣的痛点上。他不再是那个卑微的林默，而是藏在暗处，操纵一切的复仇之神。",
            step1_desc: "第一步：扰乱。晚宴是绝佳的机会，元宝决定给谭欣的社交活动制造一点小麻烦。他应该怎么做？",
            step1_choice_correct: "绊倒她，让她当众出丑",
            step1_choice_incorrect: "直接冲上台，抓挠谭欣",
            step1_failure: "失败！猫咪的突然攻击引起了骚乱，但很快被保安制服。谭欣虽然受了惊吓，却博取了同情。计划失败。",
            step2_desc: "第二步：恐吓。谭欣要参加重要的花艺展，这是打击她事业的良机。元宝潜入了花店，他决定留下一个“惊喜”。",
            step2_choice_incorrect: "打翻所有花瓶",
            step2_choice_correct: "在她的作品里放上死老鼠",
            step2_failure: "失败！打翻花瓶只造成了金钱损失，谭欣很快就重新布置好了。你的行动没有造成实质性打击。",
            step3_desc: "第三步：搜证。元宝获得了接近谭欣手包的机会，里面有她的手机。这是获取核心证据的关键时刻。",
            step3_choice_correct: "用项圈摄像头拍下手机内容",
            step3_choice_incorrect: "把手机叼走藏起来",
            step3_failure: "失败！你成功藏起了手机，但谭欣很快通过定位找到了它。你不仅暴露了自己，还一无所获。",
            retry_button: "返回重试",
            ep6_title: "B-4: 审判",
            ep6_subtitle: "投资发布会，是谭欣人生的巅峰。她含泪讲述着“艰苦创业”的故事，殊不知，这将是她坠入地狱的开始。你，来导演这场终局。",
            judgment1_desc: "第一步：接入。元宝潜入后台，找到了控制投影仪的电脑。他必须想办法把存有证据的U盘插进去。他该怎么做？",
            judgment1_choice_correct: "制造混乱，趁技术员不备换掉U盘",
            judgment1_choice_incorrect: "跳上键盘，试图自己操作",
            judgment1_failure: "失败！你的举动被当成普通的猫咪捣乱，被技术员抱走了。你失去了唯一的机会。",
            judgment2_desc: "第二步：开场。成功了！谭欣正在台上演讲。现在，你来决定第一张打出的牌，用什么来作为揭穿她的开场？",
            judgment2_choice_correct: "先放出她与其他“金主”的聊天记录",
            judgment2_choice_incorrect: "直接放出51万的转账记录",
            judgment2_failure: "效果不佳！谭欣声称这是恋爱赠予，虽引起议论但她暂时稳住了局势，并要求保安介入。",
            judgment3_desc: "第三步：终结。现场已经一片哗然，但还差最后一击！用什么来彻底终结这场审判？",
            judgment3_choice_correct: "放出林默最后的汉堡截图",
            judgment3_choice_incorrect: "循环播放她的聊天记录",
            judgment3_failure: "力度不够！虽然大家已对她无比鄙夷，但缺乏致命一击让她有机会在混乱中溜走。",
            ep7_title: "结局B: 暖阳",
            ep7_subtitle: "当仇恨散去，复仇的火焰终归熄灭。他没有感到狂喜，只有一种漫长的、疲惫的解脱。他终于能像一只真正的猫那样，享受一餐美味的金枪鱼罐头。",
            ep7_card_title: "新的猫生",
            ep7_card_text: "他不再是复仇的鬼魂，他是一只被爱着的、有家的猫。在苏晚温暖的怀抱里，他发出了满足的、响亮的呼噜声。窗外，新月明亮，照亮了前路。",
            footer_text: "一个故事的结束，是另一个故事的开始。",
            chat_header: "谭欣",
            chat_log: [ { type: 'sent', text: "花店是怎么回事？" }, { type: 'sent', text: "那些钱……" }, { type: 'received', text: "林默，我们分手吧。" }, { type: 'received', text: "那些钱，是你自愿给我的，算是我们谈恋爱期间的共同基金。" }, { type: 'sent', text: "你说过要结婚的。" }, { type: 'received', text: "你太幼稚了，那点钱在重庆能做什么？" }, { type: 'sent', text: "我为了你，两年没吃过一顿好的……" }, { type: 'received', text: "那是你自己的事，我没逼你。" }, { type: 'system', text: "你已被对方拉黑" } ]
        },
        en: {
            app_title: "The Reborn Cat's Revenge",
            nav_abyss: "Abyss",
            nav_choice: "Choice",
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
            ep3_title: "B-3: The Path of Revenge",
            ep3_subtitle: "A meticulously planned revenge, each step striking Tan Xin's weak points. He was no longer the humble Lin Mo, but the god of vengeance pulling the strings from the shadows.",
            step1_desc: "Step 1: Disruption. The gala is a perfect opportunity. Yuanbao decides to cause a little trouble for Tan Xin's social climbing. What should he do?",
            step1_choice_correct: "Trip her to cause public embarrassment",
            step1_choice_incorrect: "Rush onto the stage and scratch her",
            step1_failure: "Failed! The sudden attack caused a commotion but was quickly handled by security. Tan Xin, though frightened, gained sympathy. The plan failed.",
            step2_desc: "Step 2: Intimidation. Tan Xin is participating in a major floral exhibition, a great chance to damage her career. Yuanbao sneaks into the flower shop and decides to leave a 'surprise'.",
            step2_choice_incorrect: "Knock over all the vases",
            step2_choice_correct: "Place a dead mouse in her masterpiece",
            step2_failure: "Failed! Knocking over vases only caused financial loss, which she quickly recovered from. Your action caused no real damage.",
            step3_desc: "Step 3: Evidence. Yuanbao gets close to Tan Xin's handbag, which contains her phone. This is the key moment to get crucial evidence.",
            step3_choice_correct: "Use the collar camera to record the phone screen",
            step3_choice_incorrect: "Snatch the phone and hide it",
            step3_failure: "Failed! You successfully hid the phone, but Tan Xin quickly located it via GPS. You not only exposed yourself but also gained nothing.",
            retry_button: "Try Again",
            ep6_title: "B-4: The Judgment",
            ep6_subtitle: "The investment conference is the peak of Tan Xin's life. As she tearfully tells her story of 'hardship', she doesn't know it is the start of her descent into hell. It is you who will direct this finale.",
            judgment1_desc: "Step 1: Access. Yuanbao sneaks backstage and finds the laptop controlling the projector. He must find a way to plug in the USB drive with the evidence. What should he do?",
            judgment1_choice_correct: "Create a distraction and swap the USB drive",
            judgment1_choice_incorrect: "Jump on the keyboard and operate it himself",
            judgment1_failure: "Failed! Your action was seen as a cat just messing around and you were carried away by a technician. You lost your only chance.",
            judgment2_desc: "Step 2: The Opening. Success! Tan Xin is giving a speech on stage. Now, you decide the first card to play. What will you use to open the exposé?",
            judgment2_choice_correct: "Show her chat logs with other 'benefactors' first",
            judgment2_choice_incorrect: "Directly show the 510,000 yuan transfer record",
            judgment2_failure: "Not effective! Tan Xin claimed it was a gift. While it caused a stir, she stabilized the situation and called for security.",
            judgment3_desc: "Step 3: The Finale. The scene is in an uproar, but one final blow is needed! What will you use to end this judgment completely?",
            judgment3_choice_correct: "Show the screenshot of Lin Mo's last hamburger",
            judgment3_choice_incorrect: "Loop her incriminating chat records",
            judgment3_failure: "Not impactful enough! Though everyone despises her, the lack of a fatal blow gives her a chance to slip away in the chaos.",
            ep7_title: "Ending B: The Sunshine",
            ep7_subtitle: "When hatred faded, the flames of revenge were finally extinguished. He felt no ecstasy, only a long, weary release. He could finally enjoy a delicious can of tuna, like a real cat.",
            ep7_card_title: "A New Feline Life",
            ep7_card_text: "He was no longer a ghost of vengeance, but a beloved cat with a home. In Su Wan's warm embrace, he purred with contentment. Outside, the new moon was bright, illuminating the path ahead.",
            footer_text: "The end of one story is the beginning of another.",
            chat_header: "Tan Xin",
            chat_log: [ { type: 'sent', text: "What's with the flower shop?" }, { type: 'sent', text: "And the money..." }, { type: 'received', text: "Lin Mo, let's break up." }, { type: 'received', text: "That money was a gift, a fund for our relationship. You gave it willingly." }, { type: 'sent', text: "You said we would get married." }, { type: 'received', text: "You're so naive. What can that little money do in this city?" }, { type: 'sent', text: "For you, I ate poorly for two years..." }, { type: 'received', text: "That's your own business. I didn't force you." }, { type: 'system', text: "You have been blocked by this user" } ]
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

    if (viewChatBtn) viewChatBtn.addEventListener('click', openChatModal);
    if(closeChatBtn) closeChatBtn.addEventListener('click', () => chatModal.classList.add('hidden'));
    if(chatModal) chatModal.addEventListener('click', (e) => {
        if (e.target === chatModal) {
            chatModal.classList.add('hidden');
        }
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

    const handleStepChoice = (e, type) => {
        const step = parseInt(e.currentTarget.dataset.step);
        const isCorrect = e.currentTarget.dataset.correct === 'true';
        const currentStepContainer = document.getElementById(`${type}-step-${step}`);

        if (isCorrect) {
            currentStepContainer.classList.add('hidden');
            if (step < 3) {
                const nextStepContainer = document.getElementById(`${type}-step-${step + 1}`);
                nextStepContainer.classList.remove('hidden');
            } else {
                const finalContent = document.getElementById(type === 'revenge' ? 'path-b-final-content' : 'path-b-ending');
                finalContent.classList.remove('hidden');
                finalContent.querySelectorAll('.story-section').forEach(s => observer.observe(s));
            }
        } else {
            currentStepContainer.querySelector('.failure-message').classList.remove('hidden');
        }
    };

    document.querySelectorAll('.choice-btn').forEach(button => {
        button.addEventListener('click', (e) => handleStepChoice(e, 'revenge'));
    });

    document.querySelectorAll('.judgment-choice-btn').forEach(button => {
        button.addEventListener('click', (e) => handleStepChoice(e, 'judgment'));
    });

    document.querySelectorAll('.retry-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const step = parseInt(e.currentTarget.dataset.step);
            const type = e.currentTarget.dataset.type || 'revenge';
            const currentStepContainer = document.getElementById(`${type}-step-${step}`);
            currentStepContainer.querySelector('.failure-message').classList.add('hidden');
        });
    });

    updateLanguage(currentLang);
});