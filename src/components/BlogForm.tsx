"use client"
import React, { useState } from 'react';
import styles from './BlogForm.module.css';

const BlogForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('draft');
  const [template, setTemplate] = useState('template-1');
  const [cover, setCover] = useState<File | null>(null);
  const [scheduledPublishDate, setScheduledPublishDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      slug,
      content,
      status,
      template,
      cover,
      scheduledPublishDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.blogForm}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="slug">Slug</label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content" className={styles.label}>Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className={styles.textarea}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={styles.select}
        >
          <option value="draft">Draft</option>
          <option value="scheduled">Scheduled</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="template">Template</label>
        <select
          id="template"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className={styles.select}
        >
          <option value="template-1">Template 1</option>
          <option value="template-2">Template 2</option>
          <option value="template-3">Template 3</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cover">Cover Image</label>
        <input
          type="file"
          id="cover"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setCover(e.target.files[0]);
            }
          }}
          className={styles.fileInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="scheduledPublishDate">Scheduled Publish Date</label>
        <input
          type="date"
          id="scheduledPublishDate"
          value={scheduledPublishDate}
          onChange={(e) => setScheduledPublishDate(e.target.value)}
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default BlogForm;
