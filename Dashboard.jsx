import React, { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('create-lesson');
  const [lessons, setLessons] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    contentStandard: '',
    indicator: '',
    lessonBody: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitLesson = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.lessonBody) return;
    
    const newLesson = {
      id: Date.now().toString(),
      created_at: new Date().toLocaleDateString(),
      ...formData
    };
    
    setLessons(prev => [newLesson, ...prev]);
    setFormData({ title: '', contentStandard: '', indicator: '', lessonBody: '' });
    alert('Lesson plan drafted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header Banner */}
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-center">EduPlan AI • Lesson & Quiz Studio</h1>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex justify-around bg-white border-b border-gray-200 sticky top-0 z-10">
        <button 
          onClick={() => setActiveTab('create-lesson')}
          className={`flex-1 py-3 text-center font-medium border-b-2 text-sm transition-colors ${
            activeTab === 'create-lesson' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'
          }`}
        >
          Draft Lesson
        </button>
        <button 
          onClick={() => setActiveTab('view-lessons')}
          className={`flex-1 py-3 text-center font-medium border-b-2 text-sm transition-colors ${
            activeTab === 'view-lessons' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'
          }`}
        >
          My Lessons ({lessons.length})
        </button>
      </nav>

      {/* Dynamic Main Workspace Container */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        {activeTab === 'create-lesson' ? (
          <form onSubmit={handleSubmitLesson} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Create Dynamic Lesson Plan</h2>
            
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Lesson Title</label>
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Introduction to Vowel Harmony" 
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Content Standard</label>
                <input 
                  type="text" 
                  name="contentStandard"
                  value={formData.contentStandard}
                  onChange={handleInputChange}
                  placeholder="e.g., B7.1.1" 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Indicator</label>
                <input 
                  type="text" 
                  name="indicator"
                  value={formData.indicator}
                  onChange={handleInputChange}
                  placeholder="e.g., B7.1.1.1.2" 
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Lesson Core Content / Objectives</label>
              <textarea 
                name="lessonBody"
                value={formData.lessonBody}
                onChange={handleInputChange}
                rows="6" 
                placeholder="Type lesson contents, presentation steps, and summaries here..." 
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-sm shadow transition-all duration-200"
            >
              Save Lesson Framework
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Saved Lesson Plans</h2>
            {lessons.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-sm text-gray-400">No lessons stored yet. Switch tabs to create your first framework.</p>
              </div>
            ) : (
              lessons.map((lesson) => (
                <div key={lesson.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 text-base">{lesson.title}</h3>
                    <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">{lesson.created_at}</span>
                  </div>
                  { (lesson.contentStandard || lesson.indicator) && (
                    <p className="text-xs text-indigo-500 font-mono">
                      {lesson.contentStandard && `Standard: ${lesson.contentStandard}`} 
                      {lesson.indicator && ` | Indicator: ${lesson.indicator}`}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 line-clamp-3 bg-gray-50 p-2 rounded border border-gray-100 whitespace-pre-wrap">{lesson.lessonBody}</p>
                  <div className="pt-2 flex justify-end">
                    <button 
                      onClick={() => alert(`Ready to pass Lesson [${lesson.title}] through AI parsing schema next!`)}
                      className="text-xs bg-emerald-600 text-white font-medium px-3 py-1.5 rounded-md shadow-sm active:bg-emerald-700"
                    >
                      ⚡ Auto-Generate Quiz
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
