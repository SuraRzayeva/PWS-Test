import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StyledSinglePost } from '../styledComponents/StyledSinglePost'
import Context from '../Context'
import DispatchContext from '../DispatchContext'
import Back from '../img/icons/back.svg'
import Up from './Up'

const SinglePost = () => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)
  const [loading, setLoading] = useState(false)
  const param = useParams()
  console.log(param.id)

  useEffect(() => {
    setHome(false)
    window.scrollTo(0, 0)
  }, [])

  //------------------------------------------------------------------------------------------------ ARTICLE 1

  {
    if (param.id == 1)
      return (
        <StyledSinglePost menu={menu} style={{ opacity: menu ? '0.2' : '1' }}>
          <div className="back">
            <Link to="/blog">
              <img src={Back} alt="" />
            </Link>
          </div>
          <div className="post-card">
            <div className="heading">
              <div className="title">They say I have sad eyes. </div>
            </div>
            <div className="article">
              <p>There is an immense curiosity growing inside me, I cannot stop. When I was a child, the questions were easier to answer. Or maybe I was just too naïve to be convinced with answers deeply rooted in our manmade fictional culture, which is considered an absolute reality… which is not.</p>
              <p>Grown-up questions are different… at least if you know which questions to ask. I’m talking about the existential ones, which have no answers. Have you ever thought about that? We are even aware of the fact that those questions will never be answered… at all. </p>
              <p>It hurts. Doesn’t it?</p>
              <p>Don’t you feel like floating in an unknown space without having a clue where you’re heading? It’s ok, I know. I know... I understand that it’s not fun to live like this. Why to create all this drama? We can live simple lives, have simple desires and leave quietly, as my mum recommends. But, once you have a love affair with chaos, there is no way back, you become chaos.</p>
              <p>This is not depression. This is not a shallow pessimism. This is not a bad mood. This is deep intellectual sorrow. This is an elegant melancholy. This is looking at the eyes of existential abyss and getting merged into its cosmic darkness. </p>
              <p>When I first started questioning existence, I was wondering where the boundaries are. Because, I knew if I go beyond that I will get lost. Getting lost is scary, unknown is biologically not the most attractive place to be for us, human beings. But with time, it changed. I got lost without even getting beyond the boundaries, without even leaving the village, without even seeing the lines framing our reality. Do you understand what it means? Do you know that you can get lost without even losing the maps? Because there are no real maps? Of course there aren’t! There can’t be! They gave us the fake ones! Look at your life, look at the people around you… and lives and things, and priorities, desires, dreams, systems, laws… everything, everything is fake. Everything is imaginary. It’s just stories they make us believe. Believe. So that we can… live? Or serve? What are we doing here?</p>
              <p>Do you believe in stories? Good for you. That’s easy. Next time, try forcing yourself to give a meaning to those stories. I try too hard. I understand quite well that there is no pain like the existential one. No monster under our bed is scarier than those nihilistic thoughts in our mind. Because once you lose meaning, you lose everything. You don’t feel. Feelings are beautiful. Do you know that? Of course you know. It’s exciting. It makes every molecule in your body move. But, there is other side, which is deeper, which is darker, which comes with an immense philosophical understanding of life, which is not just sadness. Sadness is a feeling. This is a kind of indifference, which is more painful… although there are no feelings involved… or… maybe, there are too many feelings involved creating the darkest chaos in your universe, which is inside you, which is you.</p>
              <p>It’s funny, talking about pain and lost feelings at the same time. This is the real definition of suffering I guess. Maybe, the feelings are not lost at all. Maybe they are just tangled, and you don’t give a shit, because you convinced yourself that the biological explanations are the only ones to our ‘inner revolutions’. Fuck feelings you say, which is a hormonal game making us sacrificing ourselves for the sake of evolution anyways! But, sometimes, you want to give a shit about something, because you think that, ‘that something’ should be your priority. Do you know what our priority right now is? Nothing. Do you know where we want to see ourselves in like 30 years? Nowhere. This doesn’t mean we just need to sit there doing nothing and waiting to die. We have to try, work hard, be curious... There are a lot of things in this world to learn, to discover, to experience, to create. We try to be successful, and success is a relative concept to every individual. This is just…to put it right, like… if we can’t achieve anything at all… it’s ok. </p>
              <p>People say, this is an easy place to exist. And I agree. It’s easier to live with nihilistic mindset. But it’s painful to live with it, if the only thing you desire is to find a meaning. I cannot say I don’t care… I care. A lot. It’s just I don’t understand why I care or what I care about. There is no emptiness there. There is just pain. There is no just bland indifference. There is a burning curiosity, I cannot restrain. There is sadness I don’t kind of want to vanish. There is a sweet melancholy inside, I’m happy with. Yes, I can use that word. Happy. Being in pain, doesn’t mean to be unhappy. You don’t even know what the happiness is. So, why not to define that word for ourselves? Why to choose to fit in, when we can't? Why to destroy ourselves? Let's create our own reality… our own morality. I decided to get comfortable with this absolute meaninglessness. We are creative, we can create our own meaning. </p>
              <p>Because, as Alain de Botton said, melancholy is not rage or bitterness or a mental illness needs to be cured. It is a noble species of sadness that arises when we are open to the fact that life is inherently difficult for everyone and that suffering and disappointment are at the heart of human experience. It is a tender-hearted, calm, dispassionate acknowledgement of how much pain we must inevitably all travel through.</p>
            </div>
            <div className="footer">
              <p> Published on September 12, 2019</p>
            </div>
          </div>
          <Up />
        </StyledSinglePost>
      )
  }

  //------------------------------------------------------------------------------------------------ ARTICLE 3

  {
    if (param.id == 3)
      return (
        <StyledSinglePost style={{ opacity: menu ? '0.2' : '1' }}>
          <div className="back">
            <Link to="/blog">
              <img src={Back} alt="" />
            </Link>
          </div>
          <div className="post-card">
            <div className="heading">
              <div className="title">Morality </div>
            </div>
            <div className="article">
              <p>What’s the point? </p>
              <p>This question alone can lead us to different directions. </p>
              <p>What’s the point? You are free, if you’ve reached to the point of asking this question. Welcome to the edge of other people’s reality. There is no way back. I’m sorry, it’s too late to hide… you have already been infected with existentialism.</p>
              <p>I’m not going to tell you to dedicate yourself to finding the answer. Don’t waste your life looking for something that doesn’t exist. You can try. You can deny every doubt in your mind and keep pushing yourself into a mediocre lifestyle, just because you’re afraid of facing yourself. Just because you’re afraid of living a meaningless life. But, why to choose to be add more suffering to life, as if there were less? Living to find a meaning is not meaningful at all. </p>
              <p>Viktor Frankl believed that humans are motivated by something called a ‘will to meaning’, which is the desire to find meaning in life. He argued that life can have meaning even in the most miserable of circumstances, and that the motivation for living comes from finding that meaning. </p>
              <p>In other words, if you’re looking for THE meaning, you won’t find it. But if you’re looking for A meaning. It’s possible to find one and stick to it. Do you think all those people around you have a clue about what the hell they are doing in life? No! The majority just live on autopilot… not questioning existence, repeating what others do, following some stupid norms and rules, not overthinking about it and hoping for the best. They think if they live mediocre lives, if they complete all the vain steps of society, if they are normal, if they fit… when they die, some angel will appear and tell them ‘congratulations you lived a meaningful life’. </p>
              <p>No. Nobody will tell you if your life is, or was, meaningful or not. But you will know it. You will feel it. How?! How is it even possible to feel it? What’s this thing inside of us, constantly whispering about good and bad, and shaming us, and cheering us, and making us to feel guilty or be proud of ourselves? I call it our inner Roskolnikov. Others call it morality, which is the only thing that will keep you sane in this abstract reality. </p>
              <p>Don’t lose it. </p>
              <p>Not losing your morality, when there's nothing left... is your elegancy. Not because they deserve it. Just because you're the Übermensch. Just because you deserve it. Not because you're a narcissist. But, because you have the control.</p>
              <p>This is the same ‘control’ which kept Viktor Frankl alive in hell. This is the same control which helped Albert Camus to fight his nihilistic monsters. This is the same control which gifted freedom to Jean-Paul Sartre in a desert of meaninglessness. </p>
              <p>Don’t turn to god or nature to find some morality either. God has no morality. Nature on the other hand… doesn’t give a shit about you. No. Nature doesn’t have any morality either. I mean… at least ‘morality’ in a sense of word, which is rooted in our consciousness, which has some biological explanations, keeping all those philosophers and psychologists occupied during centuries. I don’t want to touch its biological explanations, because when it comes to biological reality, it becomes very hard for me to concentrate on to the idea of meaning. </p>
              <p>Anyway…</p>
              <p>It’s very interesting that morality is the quality lacking in God and Nature, but present to us in experience. When it comes to encountering with the universe – its indifference toward us, its apparent lack of purpose, and the suffering and death in it – leads us to the conclusion that we are in an absurd and miserable situation, and ending our ride can seem appealing. Yet this needn’t be an invitation to suicide. In such a situation, we can still lead a meaningful and moral life; in other words… add some music to your ride. </p>
              <p>Life is suffering. God is dead. Cosmos doesn’t care. Nature is not ultimately holistic and purposeful in any meaningful sense. However there is still a possibility for you to make a meaningful life and meet suffering with a compassionate imagination. Since nobody else—and nothing else—will value you, value yourself. If God and Nature will not speak, you speak. If no one is listening, you listen. You question. You choose. You create value. You find your meaning. </p>
              <p>However. </p>
              <p>Remember. You already asked the question. ‘What’s point?’ So… Make some place in your soul for cold nihilism, which will never leave you. There is no cure for it. Be ready to live with a huge emptiness inside. Nothing will totally fill it. But you can accept it. Only acceptance will make you free. Only freedom will help you to keep your morality. Only morality will keep you sane. </p>
              <p>It’s ok to be lost. It’s ok to be awkward. It’s ok to be sad… it’s ok to feel empty. </p>
              <p>That’s your reality.</p>
            </div>
            <div className="footer">
              <p> Published on December 10, 2019</p>
            </div>
          </div>
          <Up />
        </StyledSinglePost>
      )
  }

  //------------------------------------------------------------------------------------------------ ARTICLE 2

  {
    if (param.id == 2)
      return (
        <StyledSinglePost style={{ opacity: menu ? '0.2' : '1' }}>
          <div className="back">
            <Link to="/blog">
              <img src={Back} alt="" />
            </Link>
          </div>
          <div className="post-card">
            <div className="heading">
              <div className="title">We are too loud. </div>
            </div>
            <div className="article">
              <p>… can we just stop?</p>
              <p>No, we can’t. We are just a bunch of lost souls, hovering on life… silently, without shadows. Do you know that shadows can’t have shadows? </p>
              <p>I know your darkness. I can see you. Darkness is the only absolute reality we can rely on. So, relax… embrace it… and maybe, try to kind of… love it (?). Can you love it? Can you love?</p>
              <p>I don’t need to know your whole story to understand you. You are me. I can feel you. Can’t you feel the connection? Think about it. Right now. Or… fuck thinking, feel me. I’m sitting here, writing… pausing, looking at my hands, at my visible bones… realizing how tired I am, how delusional I am, because I haven’t normally slept for the last couple of days, or years… I don’t remember. It’s cold outside. It’s dark outside. I’m alone…. But there are people, talking inside my mind. Or it’s just me? I guess I’m too loud… Can you hear me?</p>
              <p>… we have a connection. So, let me explain us to you. </p>
              <p>We are the children of chaos, because order is intimidating. We are loud, because silence is scary. Silence is humiliating… and painful. Silence makes us stop. </p>
              <p>Bad things happen when we stop. </p>
              <p>We cannot stop. No. Just keep going, make noise, find problems, create ones if there is none, and keep busy and work, learn, create, put some music on, don’t let silence visit you… don’t let it in. Just, don’t stop. You know what happens, when we stop.</p>
              <p>We see ourselves, when we stop. We lose everything again, when we see ourselves. We are back home. Safely… how ironic!</p>
              <p>It’s sad you know… because you really get involved in life, you actually try, you plan, you feel, you trust, you forget… and suddenly, you’re back to the start point again. Why the hell we’re always making circles? Why can’t we just lie to ourselves and be done with it? Why do we choose to hurt ourselves?</p>
              <p>Our complexity is a simple one. Our complexity lies on the basis of everything… or nothing. It’s without masks… without stories… without values… without meaning. It’s just there… as a nice, soft feeling of sadness and… it’s not cold. It’s not cold. </p>
              <p>Life is simple… if you don’t think too much. Why do you think too much? Does it help you to solve yourself? Does it help you to find yourself? </p>
              <p>No. It just hurts. Can you stop?</p>
              <p>You can. But you don’t want to. What exactly are you trying to find? The lost pieces of this puzzle? Excuse me, but which puzzle? You don’t even have a single piece of this imaginary puzzle, let alone the lost ones. There is no fucking puzzle! It’s in your mind… in our mind. We are wasting our lives to find pieces of something that doesn’t even exist! It’s funny! I’m actually laughing here… I’m sure you can feel it, because, we have a connection, remember? But, we have no puzzle. I’m sorry. </p>
              <p>So… can we stop now?</p>
              <p>You know what? At this point, it doesn’t matter. Nothing matters. </p>
              <p>This is not going with the flow. This is abandoning the water. This is leaving the race. </p>
              <p>Now you finally stop. </p>
              <p>Let the silence in, sweetheart. It’s the only way, to find yourself… to face your darkness. Darkness is not scary. Nothing is scary. It’s just there, waiting for you to discover it. Don’t try to understand it… this is our problem. We try to understand everything. Rationalizing your metaphysical nihilism not only destroys the magic of its elegant melancholy, its warm familiarity, it also puts you on that hamster wheel again. Pretending… playing… keeping busy… not sleeping…. and suffering.</p>
              <p>Just accept your complexity, and never, ever try to fit in. Trying to fit in will be your destruction. </p>
              <p>It’s called acceptance. Remember this word. </p>
              <p>Accepting without protesting… without fighting. Can you do that for yourself? It’s just what it’s, you know. We cannot understand everything, because we’re too small. We are too small. I know how it feels to desire the impossible. I know how it feels to see the limits, but deep down not to feel them. I know how it feels to be alone in the middle of nothingness and feel the fear in your bones. I know how it feels to get lost. I know you’re tired. You are me. That’s your reality, that’s our reality … always trying, always moving… full of emotions… and empty at the same time. I know… I know…</p>
              <p>…</p>
              <p>Everyone stopped talking. </p>
              <p>Let’s have a quiet night. Don’t be scared. Everything is ok. </p>
            </div>
            <div className="footer">
              <p> Published on February 27, 2020</p>
            </div>
          </div>
          <Up />
        </StyledSinglePost>
      )
  }

  //------------------------------------------------------------------------------------------------ ARTICLE 4
}

export default SinglePost
