import "./DescAndReview.css";

const DescAndReview = ({ desc }) => {
    return (
        <section className="single-page-desc">
            <div className="container">
                <div className="desc-review-tab-container">
                    <p>
                        <span className="active">Description</span> | <span>Review</span>
                    </p>
                </div>
                <p className="desc-review-content">{desc}</p>
            </div>
        </section>
    );
};

export default DescAndReview;
