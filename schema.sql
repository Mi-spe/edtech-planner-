-- 1. Create the Lessons Table
CREATE TABLE lessons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    user_id UUID NOT NULL,
    title TEXT NOT NULL,
    content_standard TEXT NOT NULL,
    indicator TEXT NOT NULL,
    lesson_body TEXT NOT NULL
);

-- 2. Create the Quizzes Table (Linked directly to Lessons)
CREATE TABLE quizzes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,
    question_text TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_answer TEXT NOT NULL
);
