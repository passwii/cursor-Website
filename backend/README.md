# BLF Cross-border E-commerce Backend

This is the backend API server for the BLF Cross-border E-commerce website.

## Features

- RESTful API endpoints for services, news, and tools
- File upload functionality
- Multilingual support (Chinese and English)
- PDF processing tools
- Data analysis tools

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the development server:
```bash
python app.py
```

The server will start at http://localhost:8800

## API Endpoints

### Services

- `GET /api/services` - List all services
- `GET /api/services/:id` - Get service details
- `POST /api/services` - Create a new service
- `PUT /api/services/:id` - Update a service
- `DELETE /api/services/:id` - Delete a service

### News

- `GET /api/news` - List all news
- `GET /api/news/:id` - Get news details
- `POST /api/news` - Create a news article
- `PUT /api/news/:id` - Update a news article
- `DELETE /api/news/:id` - Delete a news article

### File Upload

- `POST /api/upload` - Upload a file
- `GET /uploads/:filename` - Get uploaded file

## Project Structure

```
backend/
├── app.py              # Main application file
├── requirements.txt    # Python dependencies
├── data/              # JSON data files
│   ├── services.json
│   └── news.json
├── uploads/           # Uploaded files
└── tool_app/          # Tool modules
    ├── daily_report.py
    ├── weekly_report.py
    ├── monthly_report.py
    ├── product_analysis.py
    ├── mic_pdf.py
    ├── resize_img.py
    ├── news.py
    ├── fba_revise_pdf.py
    └── database.py
```

## Development

1. Make sure to activate the virtual environment before starting development
2. Run the server in debug mode for development
3. Use an API client like Postman to test the endpoints
4. Check the console for error messages and debugging information

## Production Deployment

For production deployment:

1. Set `debug=False` in app.py
2. Use a production WSGI server like Gunicorn
3. Set up proper security measures
4. Configure CORS properly
5. Use environment variables for sensitive data

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Copyright (c) 2024 BLF Cross-border E-commerce. All rights reserved.
