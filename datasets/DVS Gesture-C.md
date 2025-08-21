---
{
    "name": "DVS Gesture-C",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVS128"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "tags": [
        "Gesture Recognition",
        "De-noising",
        "Hand Pose Detection"
    ],
    "description": "Corrupt dataset for noise robustness testing",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Flexible and Scalable Deep Dendritic Spiking Neural Networks with Multiple Nonlinear Branching",
        "doi": "10.48550/arXiv.2412.06355",
        "authors": [
            "Yifan Huang",
            "Wei Fang",
            "Zhengyu Ma",
            "Guoqi Li",
            "Yonghong Tian"
        ],
        "abstract": "Recent advances in spiking neural networks (SNNs) have a predominant focus on network architectures, while relatively little attention has been paid to the underlying neuron model. The point neuron models, a cornerstone of deep SNNs, pose a bottleneck on the network-level expressivity since they depict somatic dynamics only. In contrast, the multi-compartment models in neuroscience offer remarkable expressivity by introducing dendritic morphology and dynamics, but remain underexplored in deep learning due to their unaffordable computational cost and inflexibility. To combine the advantages of both sides for a flexible, efficient yet more powerful model, we propose the dendritic spiking neuron (DendSN) incorporating multiple dendritic branches with nonlinear dynamics. Compared to the point spiking neurons, DendSN exhibits significantly higher expressivity. DendSN's flexibility enables its seamless integration into diverse deep SNN architectures. To accelerate dendritic SNNs (DendSNNs), we parallelize dendritic state updates across time steps, and develop Triton kernels for GPU-level acceleration. As a result, we can construct large-scale DendSNNs with depth comparable to their point SNN counterparts. Next, we comprehensively evaluate DendSNNs' performance on various demanding tasks. By modulating dendritic branch strengths using a context signal, catastrophic forgetting of DendSNNs is substantially mitigated. Moreover, DendSNNs demonstrate enhanced robustness against noise and adversarial attacks compared to point SNNs, and excel in few-shot learning settings. Our work firstly demonstrates the possibility of training bio-plausible dendritic SNNs with depths and scales comparable to traditional point SNNs, and reveals superior expressivity and robustness of reduced dendritic neuron models in deep learning, thereby offering a fresh perspective on advancing neural network design.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-21T17:24:42.098396"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2412.06355"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2412.06355"
        },
        {
            "type": "github_page",
            "url": "https://github.com/AllenYolk/dendsn-experiments"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "DVS-GESTURE",
        "stereo": false
    },
    "connected_datasets": [
        "DVS-GESTURE"
    ],
    "bibtex": {
        "keywords": "Computer Science - Neural and Evolutionary Computing",
        "note": "arXiv:2412.06355 [cs]",
        "year": 2024,
        "month": "dec",
        "author": "Huang, Yifan and Fang, Wei and Ma, Zhengyu and Li, Guoqi and Tian, Yonghong",
        "publisher": "arXiv",
        "urldate": "2024-12-13",
        "language": "en",
        "doi": "10.48550/arXiv.2412.06355",
        "url": "http://arxiv.org/abs/2412.06355",
        "title": "Flexible and {Scalable} {Deep} {Dendritic} {Spiking} {Neural} {Networks} with {Multiple} {Nonlinear} {Branching}",
        "type": "misc",
        "key": "huang_flexible_2024"
    }
}
---

### Dataset Structure

The dataset is a modified version of the DVS-GESTURE dataset in which the recordings have been deliberately corrupted. There are six different types of corruption applied to the data
