---
{
    "name": "N-MuPeTS",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CeleX-4"
    ],
    "other_sensors": [
        "Sony IMX477"
    ],
    "category": "Human-centric Recordings",
    "tags": [
        "Pedestrian Detection",
        "Person Tracking",
        "Person Detection",
        "Object Tracking"
    ],
    "description": "Multi-person tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "http://dnt.kr.hsnr.de:8080/dvs-NMuPeTS/&sa=D&source=editors&ust=1726796807297967&usg=AOvVaw26NK2KIb4cPClOhNHn69gQ",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 39.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "N-MuPeTS: Event Camera Dataset for Multi-Person Tracking and Instance Segmentation",
        "doi": "10.5220/0011680300003417",
        "authors": [
            "Tobias Bolten",
            "Christian Neumann",
            "Regina Pohle-Fr\u00f6hlich",
            "Klaus T\u00f6nnies"
        ],
        "abstract": "Compared to well-studied frame-based imagers, event-based cameras form a new paradigm. They are biologically inspired optical sensors and differ in operation and output. While a conventional frame is dense and ordered, the output of an event camera is a sparse and unordered stream of output events. Therefore, to take full advantage of these sensors new datasets are needed for research and development. Despite their ongoing use, the selection and availability of event-based datasets is currently still limited. To address this limitation, we present a technical recording setup as well as a software processing pipeline for generating event-based recordings in the context of multi-person tracking. Our approach enables the automatic generation of highly accurate instance labels for each individual output event using color features in the scene. Additionally, we employed our method to release a dataset including one to four persons addressing the common challenges arising in multi-person t racking scenarios. This dataset contains nine different scenarios, with a total duration of over 85 minutes.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 2,
            "updated": "2025-06-15T09:03:14.387187"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-06-15T09:03:14.243786"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://pdfs.semanticscholar.org/3323/e1bc34947973d4ed222a0750bf8d722458f9.pdf"
        },
        {
            "type": "paper",
            "url": "https://www.scitepress.org/Link.aspx?doi=10.5220/0011680300003417"
        },
        {
            "type": "project_page",
            "url": "http://dnt.kr.hsnr.de/DVS-NMuPeTS/"
        }
    ],
    "full_name": "Neuromorphic-Multi-Person Tracking and Segmentation Dataset (N-MuPeTS)",
    "additional_metadata": {
        "total_duration": "85 minutes",
        "num_subjects": "4",
        "num_males": "3",
        "num_females": "1",
        "stereo": false
    },
    "bibtex": {
        "pages": "290--300",
        "year": 2023,
        "author": "Bolten, Tobias and Neumann, Christian and Pohle-Fr\u00f6hlich, Regina and T\u00f6nnies, Klaus",
        "publisher": "SCITEPRESS - Science and Technology Publications",
        "booktitle": "Proceedings of the 18th {International} {Joint} {Conference} on {Computer} {Vision}, {Imaging} and {Computer} {Graphics} {Theory} and {Applications}",
        "urldate": "2024-09-13",
        "language": "en",
        "doi": "10.5220/0011680300003417",
        "url": "https://www.scitepress.org/DigitalLibrary/Link.aspx?doi=10.5220/0011680300003417",
        "shorttitle": "N-{MuPeTS}",
        "isbn": "978-989-758-634-7",
        "title": "N-{MuPeTS}: {Event} {Camera} {Dataset} for {Multi}-{Person} {Tracking} and {Instance} {Segmentation}:",
        "address": "Lisbon, Portugal",
        "type": "inproceedings",
        "key": "bolten_n-mupets_2023"
    },
    "referenced_papers": []
}
---

### Dataset Structure

- Contains over 85 minutes of recordings
- Contains data from 4 people (3 males and 1)
