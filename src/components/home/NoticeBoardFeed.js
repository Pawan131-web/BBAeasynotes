"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const FEED_STORIES = [
  {
    id: "add-request",
    name: "Your story",
    isAdd: true,
  },
  {
    id: "story-welcome",
    name: "Welcome",
    avatar: "/updatedsitelogo.png",
    filterId: "post-welcome",
  },
  {
    id: "story-reveal",
    name: "Logo Reveal",
    avatar: "/bbaeasynoteslogo.png",
    filterId: "post-video-1",
  },
  {
    id: "story-campus",
    name: "Campus Life",
    avatar: "/images/about/bba-life-1.jpg",
    filterId: "post-video-campus",
  },
  {
    id: "story-comic",
    name: "Comic Intro",
    avatar: "/bbaeasynoteslogo.jpg",
    filterId: "post-video-comic",
  },
  {
    id: "story-feedback",
    name: "Feedback",
    avatar: "/megaphone.png",
    filterId: "post-feedback",
  },
];

const INITIAL_POSTS = [
  {
    id: "post-welcome",
    author: "bbaeasynotes",
    authorName: "BBA Easy Notes Official",
    avatar: "/updatedsitelogo.png",
    isVerified: true,
    time: "Pinned · Welcome",
    location: "Official Portal",
    type: "photo",
    image: "/updatedsitelogo.png",
    imageObjectFit: "contain",
    likes: 3840,
    comments: 298,
    shares: 215,
    caption:
      "Welcome to our site! 🎓 Welcome to BBA EasyNotes – Learn Smart. Score Better. Your all-in-one resource hub for verified BBA notes, 10-year question archives, syllabus outlines, and model exams. Bookmark this site and let's ace your board exams together! 📚✨",
    tags: ["#WelcomeToBBAEasyNotes", "#LearnSmartScoreBetter", "#BBANepal", "#OfficialLaunch"],
  },
  {
    id: "post-video-1",
    author: "bbaeasynotes",
    authorName: "BBA Easy Notes Official",
    avatar: "/updatedsitelogo.png",
    isVerified: true,
    time: "2h ago",
    location: "Official Brand Reveal",
    type: "video",
    videoUrl: "/videos/Animated_logo_reveal_for_BBA_d0a9b72c_1080p.mp4",
    likes: 3120,
    comments: 245,
    shares: 180,
    caption:
      "Official Animated Logo Reveal! 🎬 Built from the ground up for BBA scholars across Nepal. Welcome to the brand new BBA Easy Notes experience! 🚀✨",
    tags: ["#BBAEasyNotes", "#LogoReveal", "#BrandAnimation", "#BBANepal"],
  },
  {
    id: "post-feedback",
    author: "bbaeasynotes",
    authorName: "BBA Easy Notes Official",
    avatar: "/updatedsitelogo.png",
    isVerified: true,
    time: "4h ago",
    location: "Community & Feedback Desk",
    type: "text",
    textHeadline: "📢 Notice to Students: Help Us Improve BBA Easy Notes!",
    text: "If anything on the site is missing, incomplete, or portrayed incorrectly, please feel free to contact us! We genuinely want your honest feedback on what is lacking.\n\nAlso, if you have question papers, syllabus files, formula sheets, or topper summaries from your college, we invite you to share them with us. Your contributions help us build the best, most comprehensive learning platform for all BBA students across Nepal! Tap '+ Request Post' at the top or reach out to us anytime.",
    likes: 2150,
    comments: 116,
    shares: 84,
    caption:
      "Your feedback and materials help shape this platform. Let's build the best student community together! 💬🤝",
    tags: ["#FeedbackWelcome", "#StudentCommunity", "#ContributeNotes", "#BuildTogether", "#BBAEasyNotes"],
  },
  {
    id: "post-video-campus",
    author: "bbaeasynotes",
    authorName: "BBA Easy Notes Official",
    avatar: "/updatedsitelogo.png",
    isVerified: true,
    time: "1d ago",
    location: "Campus Study Hub",
    type: "video",
    videoUrl: "/videos/Students_studying_on_college_campus_d8cd440d_1080p.mp4",
    likes: 2680,
    comments: 164,
    shares: 112,
    caption:
      "Campus Life & Study Sessions 🏛️📚 Collaborative study sessions in action! Share your notes with friends, practice mock sets together, and conquer the exams. You've got this! 🙌⚡",
    tags: ["#CampusLife", "#StudyGroup", "#BBAEasyNotes", "#CollegeVibes"],
  },
  {
    id: "post-video-comic",
    author: "bbaeasynotes",
    authorName: "BBA Easy Notes Official",
    avatar: "/updatedsitelogo.png",
    isVerified: true,
    time: "2d ago",
    location: "Creative Studio",
    type: "video",
    videoUrl: "/videos/Comic_logo_intro_animation_ce9d7018_1080p.mp4",
    likes: 2290,
    comments: 132,
    shares: 95,
    caption:
      "Comic Edition Intro Animation! 💥 Study materials don't have to be boring. Keeping your exam prep creative, engaging, and easy! 📚⚡",
    tags: ["#ComicAnimation", "#CreativeDesign", "#BBAEasyNotes", "#StudyFun"],
  },
];

export default function NoticeBoardFeed({ isFloating = false }) {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [activeStoryFilter, setActiveStoryFilter] = useState("all");
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCommentsPostId, setActiveCommentsPostId] = useState(null);
  const [commentInput, setCommentInput] = useState("");

  // Listen for global floating dock header actions
  useEffect(() => {
    const handleOpenModal = () => setIsRequestModalOpen(true);
    const handleToggleSearch = () => setIsSearchOpen((prev) => !prev);
    window.addEventListener("open-request-post-modal", handleOpenModal);
    window.addEventListener("toggle-notice-search", handleToggleSearch);
    return () => {
      window.removeEventListener("open-request-post-modal", handleOpenModal);
      window.removeEventListener("toggle-notice-search", handleToggleSearch);
    };
  }, []);
  const [commentsMap, setCommentsMap] = useState({
    "post-welcome": [
      { id: 1, user: "aayush_k", text: "Welcome! So glad to have this platform for BBA exams! 🎉", time: "1h ago" },
      { id: 2, user: "neha_sharma", text: "Best wishes to the BBA Easy Notes team! 🙌", time: "45m ago" },
    ],
    "post-video-1": [
      { id: 3, user: "sarah_bba", text: "The animation looks fire! 🔥 Welcome to BBA Easy Notes!", time: "10m ago" },
      { id: 4, user: "kiran_m", text: "Love the new look and feel of the site!", time: "5m ago" },
    ],
    "post-feedback": [
      { id: 5, user: "sunil_p", text: "I have Sem 6 Financial Management past papers, where can I send them?", time: "2h ago" },
      { id: 6, user: "bbaeasynotes", text: "You can tap '+ Request Post' at the top and attach them, or message us! Thank you! 🙏", time: "1h ago" },
    ],
  });

  // Share Notification Toast
  const [toastMessage, setToastMessage] = useState("");
  const toastTimeoutRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToastMessage(""), 2800);
  };

  // Like Toggle Handler
  const handleToggleLike = (postId) => {
    setLikedPosts((prev) => {
      const isCurrentlyLiked = !!prev[postId];
      const newStatus = !isCurrentlyLiked;
      setPosts((currentPosts) =>
        currentPosts.map((p) =>
          p.id === postId
            ? { ...p, likes: p.likes + (newStatus ? 1 : -1) }
            : p
        )
      );
      return { ...prev, [postId]: newStatus };
    });
  };

  // Bookmark Toggle Handler
  const handleToggleSave = (postId) => {
    setSavedPosts((prev) => {
      const isSaved = !!prev[postId];
      showToast(isSaved ? "Post removed from saved" : "Post saved!");
      return { ...prev, [postId]: !isSaved };
    });
  };

  // Share Handler
  const handleShare = (post) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/feed/${post.id}`);
      showToast("Post link copied to clipboard!");
    } else {
      showToast("Link shared!");
    }
  };

  // Add Comment Handler
  const handleAddComment = (postId) => {
    if (!commentInput.trim()) return;
    const newComment = {
      id: Date.now(),
      user: "you",
      text: commentInput.trim(),
      time: "Just now",
    };
    setCommentsMap((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, comments: p.comments + 1 } : p))
    );
    setCommentInput("");
  };

  // Request to Post Form State
  const [requestForm, setRequestForm] = useState({
    name: "",
    college: "",
    category: "Notes & Study Material",
    title: "",
    content: "",
    imagePreview: null,
  });
  const [requestStatus, setRequestStatus] = useState("idle");
  const fileInputRef = useRef(null);

  const handleImageFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setRequestForm((prev) => ({ ...prev, imagePreview: previewUrl }));
    }
  };

  const handleRemoveImage = () => {
    setRequestForm((prev) => ({ ...prev, imagePreview: null }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!requestForm.title.trim() || !requestForm.content.trim()) return;

    setRequestStatus("submitting");
    setTimeout(() => {
      setRequestStatus("success");
    }, 900);
  };

  const handleResetModal = () => {
    setIsRequestModalOpen(false);
    setRequestStatus("idle");
    setRequestForm({
      name: "",
      college: "",
      category: "Notes & Study Material",
      title: "",
      content: "",
      imagePreview: null,
    });
  };

  // Filter posts by story click or search query
  const filteredPosts = posts.filter((post) => {
    const matchesStory =
      activeStoryFilter === "all" || post.id === activeStoryFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.textHeadline &&
        post.textHeadline.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.text && post.text.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.tags &&
        post.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    return matchesStory && matchesSearch;
  });

  return (
    <div className="relative w-full h-full flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg border border-white/10 animate-fade-in pointer-events-none">
          {toastMessage}
        </div>
      )}

      {/* Main Social Feed Phone/App Shell Container */}
      <div className={`relative z-10 bg-white flex flex-col overflow-hidden ${
        isFloating
          ? "border-0 shadow-none rounded-none h-full flex-1"
          : "rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm h-[580px] sm:h-[620px] lg:h-[660px] xl:h-[690px]"
      }`}>
        
        {/* ==================== 1. TOP APP BAR (Shown when standalone; dock bar replaces it when floating) ==================== */}
        {!isFloating && (
          <div className="p-3 sm:p-3.5 border-b border-slate-100 flex items-center justify-between bg-white/95 backdrop-blur-md shrink-0">
            
            {/* Brand Wordmark styled exactly after 'blink' from reference image */}
            <Link
              href="/"
              className="group flex items-center min-w-0 select-none hover:opacity-95 transition-opacity"
              title="bbaeasynotes"
            >
              <span className="font-blink-brand text-[25px] sm:text-[28px] font-bold text-slate-950 tracking-tight leading-none flex items-center">
                bbaeasynotes
                {/* Signature Coral Teardrop/Droplet Accent from the 'blink' reference app */}
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 -ml-0.5 -mt-2 inline-block shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1.5C8 1.5 13 6.5 13 10C13 12.7614 10.7614 15 8 15C5.23858 15 3 12.7614 3 10C3 6.5 8 1.5 8 1.5Z"
                    fill="url(#brand-droplet-grad)"
                    transform="rotate(22 8 8)"
                  />
                  <defs>
                    <linearGradient id="brand-droplet-grad" x1="3" y1="2" x2="13" y2="15" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FB7185" />
                      <stop offset="0.6" stopColor="#F43F5E" />
                      <stop offset="1" stopColor="#FB923C" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </Link>

            {/* Right Action Icons & Request Post Button */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  isSearchOpen
                    ? "bg-slate-100 text-blue-600"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
                aria-label="Search posts"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Notification Bell with Badge */}
              <Link
                href="/notices"
                className="relative p-1.5 rounded-full hover:bg-slate-100 text-slate-800 transition-colors"
                aria-label="View notifications"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  3
                </span>
              </Link>

              {/* Request Post Button */}
              <button
                type="button"
                onClick={() => setIsRequestModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-[11px] sm:text-xs font-bold transition-all shadow-xs hover:shadow-sm hover:scale-[1.02] cursor-pointer"
                title="Request to submit your news for admin verification"
              >
                <span className="text-xs font-black">+</span>
                <span>Request Post</span>
              </button>
            </div>
          </div>
        )}

        {/* Expandable Search Input */}
        {isSearchOpen && (
          <div className="px-3.5 py-2 border-b border-slate-100 bg-slate-50/80 flex items-center gap-2 animate-fade-in">
            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts, campus videos, feedback..."
              className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {/* ==================== 2. STORIES / HIGHLIGHTS ROW ==================== */}
        <div className="py-2.5 px-3 border-b border-slate-100 bg-slate-50/40 shrink-0 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-3 w-max">
            {FEED_STORIES.map((story) => {
              if (story.isAdd) {
                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setIsRequestModalOpen(true)}
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    {/* Your Story Circle with Blue Plus Icon Badge */}
                    <div className="relative w-[50px] h-[50px] rounded-full p-[2px] bg-slate-200 group-hover:bg-slate-300 transition-colors">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-white border border-white">
                        <Image
                          src="/bbaeasynoteslogo.png"
                          alt="Your profile"
                          fill
                          className="object-cover object-center"
                          sizes="50px"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black border-2 border-white shadow-xs group-hover:scale-110 transition-transform">
                        +
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 whitespace-nowrap">
                      {story.name}
                    </span>
                  </button>
                );
              }

              const isSelected = activeStoryFilter === story.filterId;

              return (
                <button
                  key={story.id}
                  type="button"
                  onClick={() =>
                    setActiveStoryFilter((prev) =>
                      prev === story.filterId ? "all" : story.filterId
                    )
                  }
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  {/* Highlight Story Circle with Gradient Ring */}
                  <div
                    className={`relative w-[50px] h-[50px] rounded-full p-[2.5px] transition-all ${
                      isSelected
                        ? "bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 scale-105"
                        : "bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 group-hover:scale-105"
                    }`}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white border-2 border-white">
                      <Image
                        src={story.avatar}
                        alt={story.name}
                        fill
                        className="object-cover object-center"
                        sizes="50px"
                      />
                    </div>
                  </div>
                  <span
                    className={`text-[10.5px] font-semibold whitespace-nowrap transition-colors ${
                      isSelected ? "text-blue-600 font-bold" : "text-slate-600"
                    }`}
                  >
                    {story.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================== 3. SCROLLABLE SOCIAL FEED POSTS ==================== */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100 scrollbar-thin">
          {filteredPosts.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              No posts found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredPosts.map((post) => {
              const isLiked = !!likedPosts[post.id];
              const isSaved = !!savedPosts[post.id];
              const postComments = commentsMap[post.id] || [];
              const isCommentsOpen = activeCommentsPostId === post.id;

              return (
                <article key={post.id} className="p-3.5 sm:p-4 bg-white flex flex-col gap-3">
                  
                  {/* Post Top Header: Avatar, Name (@bbaeasynotes), Location/Time, and Options Dots */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Author Avatar with Ring */}
                      <div className="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shrink-0">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white border border-white">
                          <Image
                            src={post.avatar}
                            alt={post.authorName}
                            fill
                            className="object-cover object-center"
                            sizes="36px"
                          />
                        </div>
                      </div>

                      {/* Author Details */}
                      <div className="min-w-0 flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-[13.5px] font-extrabold text-slate-900 tracking-tight truncate">
                            {post.author}
                          </span>
                          {post.isVerified && (
                            <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-[10.5px] text-slate-500 font-medium truncate">
                          {post.time} &middot; {post.location}
                        </span>
                      </div>
                    </div>

                    {/* Options Dots (Clean, No Pill Tag) */}
                    <button
                      type="button"
                      onClick={() => handleShare(post)}
                      className="text-slate-400 hover:text-slate-700 p-1 rounded-full transition-colors cursor-pointer"
                      title="Options"
                    >
                      <span className="text-base font-bold tracking-widest leading-none">&middot;&middot;&middot;</span>
                    </button>
                  </div>

                  {/* Post Media: VIDEO POST vs PHOTO POST vs TEXT POST */}
                  {post.type === "video" ? (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-xs border border-slate-200/80">
                      <video
                        src={post.videoUrl}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : post.type === "photo" ? (
                    /* Clean Photo Post (NO floating pill stickers or overlays) */
                    <div className={`relative w-full ${post.id === "post-welcome" ? "aspect-16/10 bg-slate-50" : "aspect-[4/3] bg-slate-100"} rounded-2xl overflow-hidden border border-slate-200/70 shadow-xs group`}>
                      <Image
                        src={post.image}
                        alt={post.caption}
                        fill
                        className={`${post.imageObjectFit === "contain" ? "object-contain p-4" : "object-cover"} transition-transform duration-500 group-hover:scale-102`}
                        sizes="(max-width: 640px) 100vw, 480px"
                      />
                    </div>
                  ) : (
                    /* High-Impact Clean Feedback / Community Notice Text Post */
                    <div className="relative w-full p-4.5 rounded-2xl bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50/70 border border-blue-100/90 shadow-xs">
                      <p className="text-[14px] sm:text-[15px] font-black text-slate-900 leading-snug mb-2 tracking-tight">
                        {post.textHeadline}
                      </p>
                      <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed font-semibold whitespace-pre-line">
                        {post.text}
                      </p>
                    </div>
                  )}

                  {/* Social Action Bar: Like, Comment, Share, Bookmark */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div className="flex items-center gap-3.5">
                      {/* Like Button */}
                      <button
                        type="button"
                        onClick={() => handleToggleLike(post.id)}
                        className="flex items-center gap-1.5 group cursor-pointer"
                        aria-label="Like post"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform active:scale-125 ${
                            isLiked
                              ? "text-rose-500 fill-rose-500"
                              : "text-slate-800 hover:text-rose-500 group-hover:scale-110"
                          }`}
                          fill={isLiked ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={isLiked ? "0" : "1.8"}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        <span className="text-xs font-bold text-slate-800">
                          {post.likes.toLocaleString()}
                        </span>
                      </button>

                      {/* Comment Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setActiveCommentsPostId((prev) =>
                            prev === post.id ? null : post.id
                          )
                        }
                        className="flex items-center gap-1.5 text-slate-800 hover:text-blue-600 transition-colors group cursor-pointer"
                        aria-label="Comments"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="text-xs font-bold text-slate-800">
                          {post.comments}
                        </span>
                      </button>

                      {/* Share Button */}
                      <button
                        type="button"
                        onClick={() => handleShare(post)}
                        className="text-slate-800 hover:text-blue-600 transition-colors group cursor-pointer"
                        aria-label="Share post"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Bookmark Button */}
                    <button
                      type="button"
                      onClick={() => handleToggleSave(post.id)}
                      className="text-slate-800 hover:text-amber-500 transition-colors group cursor-pointer"
                      aria-label="Bookmark post"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform active:scale-125 ${
                          isSaved ? "text-amber-500 fill-amber-500" : "group-hover:scale-110"
                        }`}
                        fill={isSaved ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={isSaved ? "0" : "1.8"}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Caption & Hashtags with Bolder Styling */}
                  <div className="leading-relaxed">
                    <span className="font-black text-slate-950 text-xs sm:text-[13px] mr-1.5 tracking-tight">
                      {post.author}
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-relaxed">
                      {post.caption}
                    </span>
                    {post.tags && (
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-[11.5px] font-bold text-blue-600 hover:underline cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expandable Comments Drawer */}
                  {isCommentsOpen && (
                    <div className="mt-1 pt-2 border-t border-slate-100 flex flex-col gap-2">
                      <div className="flex flex-col gap-1.5 max-h-28 overflow-y-auto pr-1">
                        {postComments.map((c) => (
                          <div key={c.id} className="text-[11.5px] leading-snug flex items-start gap-1">
                            <span className="font-bold text-slate-900 shrink-0">{c.user}:</span>
                            <span className="text-slate-600">{c.text}</span>
                          </div>
                        ))}
                      </div>
                      {/* Add Comment Input */}
                      <div className="flex items-center gap-1.5 mt-1">
                        <input
                          type="text"
                          value={commentInput}
                          onChange={(e) => setCommentInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleAddComment(post.id)}
                          placeholder="Add a comment or inquiry..."
                          className="flex-1 bg-slate-50 border border-slate-200/90 rounded-full px-3 py-1 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => handleAddComment(post.id)}
                          className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10.5px] font-bold hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}

                </article>
              );
            })
          )}
        </div>

      </div>

      {/* ==================== 4. REQUEST TO POST MODAL (Student Request with Admin Verification) ==================== */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Request to Post on BBA EasyNotes
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Admin verification by @bbaeasynotes required before publication
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetModal}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-200/80 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto flex-1">
              {requestStatus === "success" ? (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-3 shadow-inner">
                    ✓
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">
                    Notice Submitted for Verification!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mb-4 leading-relaxed">
                    Thank you! Your notice has been sent to our admin team. Once verified for authenticity, it will be published to the live campus feed.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-amber-800 mb-6">
                    <span>⏳ Verification Status:</span>
                    <span className="font-bold uppercase tracking-wider text-[11px] bg-amber-200/80 px-2 py-0.5 rounded-md">
                      Pending Admin Review
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetModal}
                    className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5">
                  {/* Verification Notice Banner */}
                  <div className="p-3 bg-amber-50/90 border border-amber-200/80 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                    <span className="text-base leading-none">🛡️</span>
                    <p className="leading-relaxed">
                      <strong>Admin Verification:</strong> All student news, routines, and flyers are manually reviewed by the administrator before appearing live to prevent spam and verify authenticity.
                    </p>
                  </div>

                  {/* Name & Affiliation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11.5px] font-bold text-slate-700 mb-1">
                        Your Name / Representative
                      </label>
                      <input
                        type="text"
                        required
                        value={requestForm.name}
                        onChange={(e) =>
                          setRequestForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="e.g. Suman Sharma (Sem 6)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11.5px] font-bold text-slate-700 mb-1">
                        College / Campus
                      </label>
                      <input
                        type="text"
                        required
                        value={requestForm.college}
                        onChange={(e) =>
                          setRequestForm((p) => ({ ...p, college: e.target.value }))
                        }
                        placeholder="e.g. Shankar Dev Campus"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-[11.5px] font-bold text-slate-700 mb-1">
                      Post Category
                    </label>
                    <select
                      value={requestForm.category}
                      onChange={(e) =>
                        setRequestForm((p) => ({ ...p, category: e.target.value }))
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="Notes & Study Material">Notes & Study Material</option>
                      <option value="Exam Routine & Schedule">Exam Routine & Schedule</option>
                      <option value="College Event & Competition">College Event & Competition</option>
                      <option value="Student Support & Notice">Student Support & Notice</option>
                    </select>
                  </div>

                  {/* Notice Title */}
                  <div>
                    <label className="block text-[11.5px] font-bold text-slate-700 mb-1">
                      Notice Title / Headline
                    </label>
                    <input
                      type="text"
                      required
                      value={requestForm.title}
                      onChange={(e) =>
                        setRequestForm((p) => ({ ...p, title: e.target.value }))
                      }
                      placeholder="e.g. BBA Case Competition 2026 Announcement"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Content / Narrative */}
                  <div>
                    <label className="block text-[11.5px] font-bold text-slate-700 mb-1">
                      Notice Description / Details
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={requestForm.content}
                      onChange={(e) =>
                        setRequestForm((p) => ({ ...p, content: e.target.value }))
                      }
                      placeholder="Provide full details, date, venue, or instructions..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Image Attachment (Optional) */}
                  <div>
                    <label className="block text-[11.5px] font-bold text-slate-700 mb-1">
                      Attach Image / Flyer (Optional)
                    </label>
                    {requestForm.imagePreview ? (
                      <div className="relative w-full h-36 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                        <Image
                          src={requestForm.imagePreview}
                          alt="Notice preview"
                          fill
                          className="object-contain"
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/70 hover:bg-black text-white text-xs flex items-center justify-center transition-colors cursor-pointer"
                          title="Remove image"
                        >
                          &times;
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-24 border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-xl flex flex-col items-center justify-center gap-1 bg-slate-50/60 hover:bg-blue-50/40 transition-colors cursor-pointer p-2 text-center"
                      >
                        <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-xs font-semibold text-slate-600">
                          Click to upload notice photo or flyer
                        </span>
                        <span className="text-[10px] text-slate-400">
                          PNG, JPG or WEBP up to 5MB
                        </span>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={handleResetModal}
                      className="px-4 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={requestStatus === "submitting"}
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold transition-all shadow-sm hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                    >
                      {requestStatus === "submitting"
                        ? "Submitting for Review..."
                        : "Submit for Verification →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
