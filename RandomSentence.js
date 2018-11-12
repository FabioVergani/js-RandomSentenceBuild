const sentences=(a,b,c,d,e,f)=>{
	const r=Math.random,
	s=' ';
	g=m=>m[(r()*m.length)<<0],
	h=[s,', ','; '];
	return n=>{
		let i=0,t=g(a);
		t=t.charAt(0).toUpperCase()+t.slice(1);
		t=[
			t,//joiner capitalized
			s,
			g(b),//adjectives
			s,
			g(c),//nouns
			s,
			g(d),//verbs
			s,
			g(e),//adverbs
			s,
			g(d),//verbs
			g(h),
			g(a),//joiner
			s,
			g(c),//nouns
			s,
			g(e),//adverbs
			s,
			g(d),//verbs
			g(h),
			g(f),//preposition
			s,
			g(a),//joiner
			s,
			g(b),//adjectives
			s,
			g(c),//nouns
			s,
			g(b),//adjectives
			s,
			g(b),//adjectives
			s,
			g(c)//nouns
		];
		return t.join('')+'.'
	}
},
fakeSentences=sentences([
//#0 joiner:
'the','a','one','two','because some'
],[
//#1 adjectives:
'beautiful','lascive','professional','lovely','wife','rough','soft','hot','vibrating','yummy'
],[
//#2 nouns:
'toy','cock','boy','plastic','latex','teacher','student','professor','hamster','dog'
],[
//#3 verbs:
'kicked','ran','flew','dodged','sliced','rolled','died','breathed','slept','killed'
],[
//#4 adverbs:
'slowly','elegantly','precisely','quickly','sadly','humbly','proudly','shockingly','calmly','passionately'
],[
//#5 preposition:
'down','into','up','on','upon','below','above','through','across','towards'
]);

console.log(fakeSentences())
