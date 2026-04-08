import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">

                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        The Story of <span className="text-cyan-500">React</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A deep dive into the origins and core concepts of the JavaScript library that revolutionized frontend web development.
                    </p>
                </div>

                <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-cyan-100 pb-2 mb-6 inline-block">
                        Origins & History
                    </h2>
                    <div className="space-y-4 text-slate-600 leading-relaxed">
                        <p>
                            React was created by <strong>Jordan Walke</strong>, a software engineer at Facebook. He was heavily influenced by XHP, an HTML component framework for PHP.
                        </p>
                        <p>
                            Before React, building complex, highly interactive user interfaces (like the Facebook timeline) was notoriously difficult. Developers had to manually update the DOM (Document Object Model) using jQuery or vanilla JavaScript, which led to "spaghetti code" that was slow and hard to maintain.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <li><strong>2011:</strong> React was first deployed on Facebook's News Feed.</li>
                            <li><strong>2012:</strong> It was integrated into Instagram after Facebook acquired it.</li>
                            <li><strong>May 2013:</strong> React was officially open-sourced at JSConf US, changing the web development landscape forever.</li>
                        </ul>
                    </div>
                </section>


                <section>
                    <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-cyan-100 pb-2 mb-6 inline-block">
                        Key Concepts & "The React Way"
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">🧩</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Component-Based</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                UIs are broken down into independent, reusable pieces called components. Instead of building one massive HTML file, you build small Lego blocks (like a Button or a Header) and combine them to form complex apps.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">The Virtual DOM</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Updating the real browser DOM is slow. React creates a lightweight copy in memory (the Virtual DOM). When data changes, React compares the new Virtual DOM with the old one, figures out exactly what changed, and updates only those specific parts.
                            </p>
                        </div>


                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">📝</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">JSX (JavaScript XML)</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                JSX is a syntax extension that allows developers to write HTML directly inside JavaScript files. It makes writing React components much more intuitive and visual, combining rendering logic with UI markup.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="text-3xl mb-4">⬇️</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">One-Way Data Flow</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                In React, data flows in a single direction: from parent components down to child components via "props". This makes it much easier to debug errors and understand how data is moving through your application.
                            </p>
                        </div>

                    </div>
                </section>

                <div className="text-center pt-8 border-t border-slate-200">
                    <p className="text-slate-500 text-sm">
                        Today, React is maintained by Meta and a massive community of open-source developers, powering everything from Netflix to Airbnb.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;